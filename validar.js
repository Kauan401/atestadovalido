export default function handler(req, res) {
    const { chave } = req.query;

    // proteção básica
    if (!chave) {
        return res.status(200).json({
            erro: true,
            mensagem: "Chave não informada"
        });
    }

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
            assinatura_digital: "8b27ca3ac92b1e458763076a",
            status: "ATIVO"
        }
    };

    const resultado = base_dados[chave];

    if (!resultado) {
        return res.status(200).json({
            erro: true,
            mensagem: "Documento não localizado na base"
        });
    }

    return res.status(200).json(resultado);
}
