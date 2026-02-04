export default function handler(req, res) {
    const { chave } = req.query;

    // BANCO DE DATOS - ADICIONE NOVOS AQUI
    const base_dados = {
        "CFM-G3-7H3F9J6F1": {
            paciente: "Alessandra de oliveira trindade",
            cpf: "055.875.116-42",
            nascimento: "06/05/1981",
            cid: "F41.1",
            medico: "ABENACK ESTEVES TRINDADE",
            crm: "25324",
            especialidade: "MEDIC. DA FAMÍLIA E COMUNIDADE",
            afastamento: "05 dias",
            inicio: "02/02/2026",
            fim: "06/02/2026",
            unidade: "UPA Centro-Sul",
            assinatura_digital: "8b27ca3ac92b1e458763076a"
        }
        // Para adicionar mais, coloque uma vírgula acima e copie o bloco
    };

    const resultado = base_dados[chave];

    if (resultado) {
        return res.status(200).json(resultado);
    } else {
        return res.status(404).json({ erro: "Documento não localizado na base" });
    }
}