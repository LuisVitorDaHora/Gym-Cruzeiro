from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
from datetime import datetime

app = Flask(__name__)

# Configuração da conexão com o banco de dados
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="3501Luis@",  # substitua pela sua senha
    database="Gym_Cruzeiro",  # nome do seu banco de dados
    port=3306
)

# Rota para a página inicial com o formulário
@app.route('/')
def index():
    return render_template('cadastro.html')

# Rota para processar o formulário de cadastro
@app.route('/submit', methods=['POST'])
def submit():
    # Captura os dados do formulário
    nome = request.form['nome']
    cpf = request.form['cpf']
    data_nascimento = request.form['data-nascimento']
    email = request.form['email']
    telefone = request.form['telefone']
    endereco = request.form['endereco']
    genero = request.form['genero']
    senha = request.form['senha']
    
    # Definir data de inscrição e status
    data_inscricao = datetime.now().date()  # Define a data atual
    status = "Ativo"  # Pode ajustar conforme a lógica de negócio

    # Conectando ao banco de dados e inserindo os dados do aluno
    cursor = db.cursor()
    sql = """INSERT INTO alunos (nome, CPF, dt_nasc, email, telefone, endereco, genero, dt_inscricao, status, senha)
             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    val = (nome, cpf, data_nascimento, email, telefone, endereco, genero, data_inscricao, status, senha)
    
    try:
        cursor.execute(sql, val)
        db.commit()  # Confirma a inserção no banco de dados
        print("Dados do aluno inseridos com sucesso.")
        
        # Obtendo o ID do aluno recém inserido
        aluno_id = cursor.lastrowid

        # Capturando os dados da avaliação física
        altura = request.form['altura']  # A altura que você está capturando do formulário
        peso = request.form['peso']  # O peso que você está capturando do formulário
        objetivo = request.form['objetivo']  # O objetivo que você está capturando do formulário
        dt_avaliacao = datetime.now().date()  # Define a data atual para a avaliação

        # Inserindo dados na tabela avali_fisica
        sql_avali_fisica = """INSERT INTO avali_fisica (dt_avaliacao, id_aluno, peso, altura, objetivo)
                              VALUES (%s, %s, %s, %s, %s)"""
        val_avali_fisica = (dt_avaliacao, aluno_id, peso, altura, objetivo)
        cursor.execute(sql_avali_fisica, val_avali_fisica)
        db.commit()  # Confirma a inserção na tabela de avaliação física
        print("Dados de avaliação física inseridos com sucesso.")

    except Exception as e:
        print(f"Erro ao inserir dados: {e}")
        db.rollback()  # Reverte qualquer alteração em caso de erro

    finally:
        cursor.close()  # Fecha o cursor

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
