class DuracionMinutos {

    constructor(valor) {
        if (valor < 0) {
            throw new Error("La duración no puede ser negativa");
        }
        
        this.valor = valor;
        Object.freeze(this);
    }

}

module.exports = DuracionMinutos;
