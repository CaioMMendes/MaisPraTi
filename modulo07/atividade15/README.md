
## 📌 Sobre

- Atividade 15 - Implementando Relacionamento ManyToMany
  
##

- Serviço: Implemente um serviço que permita:
  
        Criar novos alunos e cursos.
        Adicionar e remover um aluno de um curso específico.
        Listar todos os cursos de um aluno e todos os alunos de um curso.

- Controller: Implemente um controlador REST para as seguintes operações:
  
        POST /alunos: Adicionar um novo aluno.
        POST /cursos: Adicionar um novo curso.
        POST /alunos/{id}/cursos/{cursoId}: Matricular um aluno em um curso.
        DELETE /alunos/{id}/cursos/{cursoId}: Remover um aluno de um curso.
        GET /alunos/{id}/cursos: Listar todos os cursos em que um aluno está matriculado.
        GET /cursos/{id}/alunos: Listar todos os alunos matriculados em um curso.

- Desafio Adicional (Opcional): Implemente uma funcionalidade que permita pesquisar cursos por nome e alunos por e-mail, utilizando consultas dinâmicas no repositório.
