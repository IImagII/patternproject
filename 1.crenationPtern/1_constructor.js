// // мы создали консруктор
// function Server(name, ip) {
//    this.name = name
//    this.ip = ip
// }
// //Добавили ему метод
// Server.prototype.getUrl = function () {
//    return `http://${this.ip}:80`
// }
// // тут начали работу с патерном
// const aws = new Server('AWS German', '82.21.21.32')
// console.log('aws.getUrl() :>> ', aws.getUrl())

class Server {
   constructor(name, ip) {
      this.name = name
      this.ip = ip
   }
   getUrl() {
      return `http://${this.ip}:80`
   }
}
//Именно вот эта строка является патерном консруктором
const aws = new Server('AWS German', '82.21.21.32')
console.log('aws.getUrl() :>> ', aws.getUrl())
