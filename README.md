# Projeto: Nota Fiscal de Serviço (NFS-e)

## Objetivo Inicial do Projeto

Este projeto foi desenvolvido como parte de um exercício prático para uma vaga de estágio. A proposta inicial era criar uma página web que:

1.  Recebesse os dados necessários para a emissão de uma Nota Fiscal de Serviço (NFS-e).
    
2.  Calculasse os impostos de acordo com os dados fornecidos.
    
3.  Gerasse e exibisse a Nota Fiscal diretamente na mesma página.
    

### Dados de Entrada

-   **Valor da Venda**: O valor total da venda dos serviços.
    
-   **Itens Vendidos**: Descrição dos itens ou serviços vendidos.
    
-   **Porcentagens dos Impostos**:
    
    -   IRPF (Imposto de Renda Pessoa Física)
        
    -   PIS (Programa de Integração Social)
        
    -   COFINS (Contribuição para o Financiamento da Seguridade Social)
        
    -   INSS (Instituto Nacional do Seguro Social)
        
    -   ISSQN (Imposto Sobre Serviços de Qualquer Natureza)
        

### Funcionalidades Básicas

-   Validação dos dados inseridos pelo usuário.
    
-   Cálculo automático dos impostos com base nas porcentagens fornecidas.
    
-   Exibição organizada da Nota Fiscal com os cálculos detalhados.    

----------

## Melhorias Implementadas

Com o objetivo de destacar o projeto e oferecer uma solução mais completa, fiz a implementação das seguintes funcionalidades adicionais:

### 1. **Exportação da Nota Fiscal**

-   **Geração de PDF**:
    
    -   Utilizando a biblioteca `jsPDF`, foi adicionada a possibilidade de exportar a Nota Fiscal em formato PDF, pronta para ser enviada ou armazenada.
        
-   **Exportação para CSV**:
    
    -   Implementação da geração de um arquivo CSV contendo os dados da Nota Fiscal. Este formato é ideal para importação em sistemas financeiros ou análise em ferramentas como Excel e Google Sheets.    

        
### 2. **Impressão da Nota Fiscal**

-   Foi incluído um botão para imprimir a Nota Fiscal diretamente a partir da página.
    

### 3. **Validação e Feedback ao Usuário**

-   Mensagens de erro claras foram implementadas para guiar o usuário na correção de campos inválidos ou não preenchidos.
    
-   Melhoria na experiência do usuário ao evitar submissão de dados incompletos.   

----------

## Tecnologias Utilizadas

-   **HTML**: Estrutura da página.
-   **CSS**: Estilização para criar uma interface amigável e organizada.    
-   **JavaScript**: Lógica para cálculo de impostos, validação de dados e geração/exportação dos arquivos.    
-   **Biblioteca jsPDF**: Para geração do arquivo PDF. 
-   **Vercel**: Plataforma utilizada para hospedagem e visualização online do projeto   

----------

## Acesso ao Projeto

O projeto está disponível online e pode ser acessado através do seguinte link:

[**Gerador de Nota de Serviço - Acesse aqui**](https://desafio-tecnico-st.vercel.app/)


## Como Usar

1.  Insira os dados nos campos do formulário:
    
    -   Valor da venda, itens vendidos e porcentagens dos impostos.
        
2.  Clique no botão "Gerar Nota Fiscal" para calcular e exibir os resultados.
    
3.  Utilize os botões adicionais para:
    
    -   Exportar a Nota Fiscal em PDF ou CSV.
        
    -   Imprimir a Nota Fiscal diretamente.      


----------

## Conclusão

Este projeto foi desenvolvido com o objetivo de ir além da proposta inicial, demonstrando habilidades técnicas e atenção aos detalhes. As funcionalidades adicionais oferecem maior versatilidade e valor ao projeto, tornando-o mais útil para empresas que buscam otimizar o processo de emissão de notas fiscais e integração com sistemas externos.
