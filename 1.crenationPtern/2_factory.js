class SimpleMemberShip {
   constructor(name) {
      this.name = name
      this.cost = 50
   }
}

class StandardMemberShip {
   constructor(name) {
      this.name = name
      this.cost = 150
   }
}

class PremiumMemberShip {
   constructor(name) {
      this.name = name
      this.cost = 500
   }
}
//мы создадим некую обобщающюю структуру которая как бы собтрает все созданнеы классыы
class MemberFactory {
   static list = {
      simple: SimpleMemberShip,
      standard: StandardMemberShip,
      premium: PremiumMemberShip,
   }
   //пишем метод по созданию инстансов
   create(name, type = 'simple') {
      const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
      const member = new MemberShip(name)
      member.type = type
      member.define = function () {
         console.log('object :>> ', `${this.name} ${this.type}: ${this.cost}`)
      }
      return member
   }
}

const factory = new MemberFactory()
const members = [
   factory.create('Vladilen', 'simple'),
   factory.create('Elena', 'premium'),
   factory.create('Mikael', 'standard'),
]

members.forEach(m => {
   m.define()
})
