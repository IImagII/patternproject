const car = {
   wheels: 4,
   init() {
      console.log(
         'object :>> ',
         `у меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
      )
   },
}
const carWithOwner = Object.create(car, {
   owner: {
      value: 'Андрей',
   },
})
