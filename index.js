 class Heroi {
    constructor (nome , xp){
       this.nome = nome;
        this.xp = xp;
    
 }
    novoRank(){
     switch (true){
        case (this.xp >= 0 && this.xp <= 1000):
            return 'Ferro';
        case (this.xp >= 1001 && this.xp <= 2000):
            return 'Bronze';
        case (this.xp >= 2001 && this.xp <=5000):
            return 'Prata'
        case (this.xp >= 6001 && this.xp <= 7000):
            return 'ouro';
        case(this.xp >= 7001 && this.xp <= 8000):
            return 'Platina'
        case (this.xp >= 8001 && this.xp <= 9000):
            return 'Ascendente'
        case(this.xp >= 9001 && this.xp <= 10000):
            return 'Imortal'
        case (this.xp >= 10001 ):
            return'Radiante'
     }
}
 }


    const heroi1 = new Heroi('Pablozm', 13000);
    console.log (`nome: ${heroi1.nome}, xp : ${heroi1.xp}, novoRank: ${heroi1.novoRank()}`);