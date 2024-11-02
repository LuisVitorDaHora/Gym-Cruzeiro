from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
from datetime import datetime, date

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta'

# Configuração da conexão com o banco de dados
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="3501Luis@",  # substitua pela sua senha
    database="Gym_Cruzeiro",
    port=3306
)

# Rota para a página inicial com o formulário de cadastro
@app.route('/')
def home():
    return render_template('home.html')

# Rota para a página de login
@app.route('/login')
def login():
    return render_template('login.html')

# Rota para a tela inicial do aluno
@app.route('/inicialaluno')
def inicialaluno():
    nome = request.args.get('nome')
    email = request.args.get('email')
    return render_template('inicialaluno.html', nome=nome, email=email)

@app.route('/area_aluno')
def area_aluno():
    email = request.args.get('email')
    print(f"Email recebido: {email}")
    if not email:
        flash('E-mail não fornecido.')
        return redirect(url_for('home'))

    try:
        # Criar um novo cursor para cada consulta
        cursor = db.cursor()
        sql = """
            SELECT 
                i.nome AS instrutor_nome,
                t.categoria_treino AS treino_nome,
                af.objetivo,
                a.dt_inscricao
            FROM 
                alunos a
            JOIN 
                avali_fisica af ON a.id_aluno = af.id_aluno_fk
            JOIN 
                instrutores i ON af.id_instrutor_fk = i.id_instrutor
            JOIN 
                treinos t ON t.id_aluno_fk = a.id_aluno
            WHERE 
                a.email = %s
            ORDER BY 
                af.dt_avaliacao DESC 
            LIMIT 1
        """
        cursor.execute(sql, (email,))
        resultado = cursor.fetchone()
        print(f"Resultado da consulta: {resultado}")

        if resultado:
            instrutor_nome, treino_nome, objetivo, dt_inscricao = resultado
            return render_template('areaaluno.html', 
                                   nome_instrutor=instrutor_nome, 
                                   nome_treino=treino_nome, 
                                   objetivo=objetivo,
                                   dt_inscricao=dt_inscricao,
                                   email=email)
        else:
            flash('Nenhuma informação encontrada.')
            return redirect(url_for('home'))

    except Exception as e:
        flash('Erro ao buscar informações do aluno.')
        print(f"Erro: {e}")
        return redirect(url_for('home'))
    
    finally:
        if cursor:
            cursor.close()



# Rota para a página de perfil do aluno
@app.route('/perfil_aluno')
def perfil_aluno():
    email = request.args.get('email')
    if not email:
        flash('E-mail não fornecido.')
        return redirect(url_for('home'))

    cursor = None
    try:
        cursor = db.cursor()
        sql = """
            SELECT 
                a.nome, 
                a.CPF, 
                a.dt_nasc, 
                a.genero, 
                a.email, 
                a.telefone, 
                a.endereco, 
                af.altura, 
                af.peso, 
                af.dt_avaliacao
            FROM 
                alunos a
            LEFT JOIN 
                avali_fisica af ON a.id_aluno = af.id_aluno_fk
            WHERE 
                a.email = %s
            ORDER BY 
                af.dt_avaliacao DESC 
            LIMIT 1
        """
        cursor.execute(sql, (email,))
        aluno = cursor.fetchone()

        if aluno:
            return render_template('perfilaluno.html', nome=aluno[0], cpf=aluno[1], dt_nasc=aluno[2],
                                   genero=aluno[3], email=aluno[4], telefone=aluno[5],
                                   endereco=aluno[6], altura=aluno[7], peso=aluno[8])
        else:
            flash('Aluno não encontrado.')
            return redirect(url_for('home'))

    except Exception as e:
        flash('Erro ao buscar informações do aluno.')
        return redirect(url_for('home'))
    
    finally:
        if cursor:
            cursor.close()

# Rota para a página de treinos do aluno
@app.route('/treino_aluno')
def treino_aluno():
    return render_template('treinoaluno.html')

# Rota para o dashboard do aluno
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/loginADM')
def login_adm():
    return render_template('loginADM.html')

# Rota para a página de login do professor
@app.route('/login_professor')
def login_professor():
    return render_template('loginprofessor.html')

# Rota para processar o login
@app.route('/login_submit', methods=['POST'])
def login_submit():
    email = request.form['email']
    senha = request.form['password']

    cursor = db.cursor()
    sql = "SELECT * FROM alunos WHERE email = %s AND senha = %s"
    cursor.execute(sql, (email, senha))
    user = cursor.fetchone()

    if user:
        return redirect(url_for('inicialaluno', nome=user[1], email=email))
    else:
        flash('E-mail ou senha inválidos.')
        return redirect(url_for('login'))

# Rota para a página de cadastro
@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

# Rota para processar o formulário de cadastro
@app.route('/submit', methods=['POST'])
def submit():
    nome = request.form['nome']
    cpf = request.form['cpf']
    data_nascimento = request.form['data-nascimento']
    email = request.form['email']
    telefone = request.form['telefone']
    endereco = request.form['endereco']
    genero = request.form['genero']
    senha = request.form['senha']

    dt_nasc = datetime.strptime(data_nascimento, '%Y-%m-%d').date()
    today = date.today()
    idade = today.year - dt_nasc.year - ((today.month, today.day) < (dt_nasc.month, dt_nasc.day))

    if idade < 18:
        flash("Você deve ter pelo menos 18 anos para se cadastrar.")
        return redirect(url_for('cadastro'))

    data_inscricao = datetime.now().date()
    status = "Ativo"

    cursor = db.cursor()
    sql = """INSERT INTO alunos (nome, CPF, dt_nasc, email, telefone, endereco, genero, dt_inscricao, status, senha)
             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    val = (nome, cpf, data_nascimento, email, telefone, endereco, genero, data_inscricao, status, senha)

    try:
        cursor.execute(sql, val)
        db.commit()
        aluno_id = cursor.lastrowid
        
        dt_avaliacao = datetime.now().date()
        altura = float(request.form['altura'])
        peso = float(request.form['peso'])
        objetivo = request.form['objetivo']
        id_instrutor_fk = request.form['instrutor']

        imc = peso / ((altura / 100) ** 2)

        sql_avali_fisica = """INSERT INTO avali_fisica (dt_avaliacao, peso, altura, IMC, objetivo, id_instrutor_fk, id_aluno_fk)
                              VALUES (%s, %s, %s, %s, %s, %s, %s)"""
        val_avali_fisica = (dt_avaliacao, peso, altura, imc, objetivo, id_instrutor_fk, aluno_id)
        cursor.execute(sql_avali_fisica, val_avali_fisica)
        db.commit()
        
        flash("Cadastro realizado com sucesso.")
        return redirect(url_for('login'))
    except Exception as e:
        flash("Ocorreu um erro ao cadastrar.")
        print(f"Erro: {e}")
        return redirect(url_for('cadastro'))
    finally:
        cursor.close()

# Rota para trocar o treino do aluno
@app.route('/trocar_treino', methods=['POST'])
def trocar_treino():
    email_aluno = request.form['email_aluno']
    novo_treino = request.form['novo_treino']

    cursor = db.cursor()

    try:
        cursor.execute("""
            SELECT dt_avaliacao FROM avali_fisica 
            WHERE id_aluno_fk = (SELECT id_aluno FROM alunos WHERE email = %s)
            ORDER BY dt_avaliacao DESC LIMIT 1
        """, (email_aluno,))
        resultado = cursor.fetchone()

        if resultado:
            dt_avaliacao = resultado[0]
            cursor.execute("""
                UPDATE treinos SET nome_treino = %s WHERE id_aluno_fk = (SELECT id_aluno FROM alunos WHERE email = %s)
                AND id_treino = (SELECT id_treino FROM avali_fisica WHERE dt_avaliacao = %s)
            """, (novo_treino, email_aluno, dt_avaliacao))
            db.commit()
            flash("Treino atualizado com sucesso.")
        else:
            flash("Nenhum treino encontrado para atualizar.")
    except Exception as e:
        flash("Erro ao atualizar treino.")
        print(f"Erro: {e}")
    finally:
        cursor.close()

    return redirect(url_for('inicialaluno'))

if __name__ == '__main__':
    app.run(debug=True)