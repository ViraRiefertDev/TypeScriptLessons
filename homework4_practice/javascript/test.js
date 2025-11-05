"use strict";
// =============== ФУНкЦІЇ ==================
// 1. Функція formatName повертає ім’я у форматі "First Last", або просто "First".
// function formatName(firstName:string, lastName?:string):string{
//   return lastName ? `${firstName} ${lastName}` : firstName
// }
// console.log(formatName('Andrij','Born'))
// console.log(formatName('Andrij'))
// 2. Функція повертає середнє арифметичне з будь-якої кількості чисел.
// restOperator
// function getAvarage(...numbers:number[]):number{
//   return numbers.reduce((prevSum, number)=>number+prevSum,0)/numbers.length
// }
// console.log(getAvarage(2,4,6))
// 2.1. Функція виводить на екран тільки ті рядки, довжина яких є більшою за 5. Кількість параметрів-рядків може бути довільною.
// function printGreaterLength(lengthLimit:number, ...lines:string[]):void{
//   lines.forEach((el)=>{
//     if(el.length>lengthLimit){
//       console.log(el)
//     }
//   })
// }
// printGreaterLength(5, 'Olga','Oleksandr','Peter','Vladislava', 'Marijka')
// 2.2. Функція повертає кількість входжень символу у рядку.
// function getCharCount(text:string, char:string):number{
//   return text.split('').reduce((prevCount, el)=> el === char ? prevCount+1:prevCount, 0)
// }
// console.log(getCharCount('Hello', 'l'))
// 2.2. Функція приймає довільну кількість рядків і повертає один рядок, розділений комами.
// function getJoinedString(...lines:string[]):string{
//   return lines.join(', ')
// }
// console.log(getJoinedString('Hello','My','World'))
// 2.3. Функція приймає масив ідентифікаторів (чисел або рядків). Підрадувати кількість ідентифікаторів чисел.
// function getIdNumberCount(idList:(string | number)[]):number{
//   return idList.reduce((prevCount:number,el)=>(typeof el==='number') ? prevCount+1:prevCount,0)
//   // return idList.filter(el=> typeof el === 'number').length
// }
// console.log(getIdNumberCount([1,3,'6',4,'7',8]))
// 3. Напиши функцію, яка повертає тільки ті числа, для яких predicate (функція-предикат, яка визначає умову) повертає true
// type callbackFunc = (n:number)=>boolean
// function filterNumbers(numbersList:number[], predicateFunc:callbackFunc){
//   return numbersList.filter(predicateFunc)
// }
// let res = filterNumbers([1,2,3,4,5],n=>n>3)
// console.log(res)
// 4. Напиши узагальнену функцію, яка повертає перший елемент параметра-масиву незалежно від типу.
// function getFirstElement(array:any[]):any{
//   return array[0]
// }
// const arr = [1,2,3]
// const arr2 = ['11','22','33']
// console.log(getFirstElement(arr))
// console.log(getFirstElement(arr2))
// 5. Оголоси об’єкт counter із властивістю count: number та методом increment, який збільшує count на 1 (викоритати this у параматрах).
// const obj = {
//   count:21,
//   //якщо ми позичимо цей метод іншому об'єкту, то this:{count:number} буде перевіряти чи є у цього об'єкта поле count
//   increment(this:{count:number}){
//     this.count+=1
//   }
// }
// 5.1. Таймер. Властивість seconds  і метод tick (викорстати параметр this)
// const timer = {
//   seconds: 58,
//   tick(this:{seconds:number}){
//     this.seconds += 1
//     if(this.seconds>60){
//       this.seconds=0
//     }
//   }
// }
// console.log(timer.seconds)
// timer.tick()
// console.log(timer.seconds)
// timer.tick()
// console.log(timer.seconds)
// timer.tick()
// console.log(timer.seconds)
// timer.tick()
// console.log(timer.seconds)
// 6. Функція-композитор. Напиши функцію яка приймає кілька функцій і повертає нову, що виконує їх послідовно зліва направо (і результат попередньої є вхідним параметром для наступної).
// type OperationFunc = (n:number)=>number
// function myComposeFunction(initNumber:number, ...functions:OperationFunc[]){
//   let res = initNumber
//   functions.forEach(func=>{ res=func(res) })
//   return res
// }
// let res = myComposeFunction(10, (x)=>x*2, (x)=>x+100, (x)=>x-10)
// console.log(res)
// type OperationFunc = (n:number)=>number
// function getComposeFunc( ...functions:OperationFunc[]){
//   function myComposeFunction(initNumber:number){
//     let res = initNumber
//     functions.forEach(func=>{ res=func(res) })
//     return res
//   }
//   return myComposeFunction
// }
// const myComposeFunction = getComposeFunc((x)=>x*2, (x)=>x+100, (x)=>x-10)
// let res = myComposeFunction(10 )
// console.log(res)
// res = myComposeFunction(100)
// console.log(res)
// 7. Логгер з рівнем важливості. Функція приймає повідомлення і рівень важливості ("info", "warn" , "error").
// type LevelType = 'info' | 'warn' | 'error'
// function myLog(type:LevelType, message:string){
//   switch(type){
//     case 'info':
//       console.info(message)
//       break
//     case 'warn':
//       console.warn(message)
//       break
//     case 'error':
//       console.error(message)
//       break
//     default:
//       const _check:never = type
//       break  
//   }
// }
// myLog('info', 'OK')
// myLog('warn', 'Test w')
// myLog('error', 'Test error')
// 8. Генератор, який видає числа від 1 до n
// function* getNumbers(minValue:number, maxValue:number, step:number=1){
//   for (let num = minValue; num <= maxValue; num+=step){
//     yield num
//   }
// }
// // for (const el of getNumbers(1,10,2)) {
// //   console.log(el);
// // }
// let arr = [...getNumbers(1,10,2)]
// console.log(arr)
// =============== ПЕРЕВАНТАЖЕННЯ ===========
// 1. Калькулятор. Створи функцію calculate, яка:
// •	при виклику calculate(2, 3, "+") повертає 5
// •	при виклику calculate(2, 3, "*") повертає 6
// •	при виклику calculate(2, ‘OK’, "*") повертає ‘OKOK’
// •	при виклику calculate("2", "3", "+") повертає "23"
// function calculate(a:number,b:number, operation:'+'):number
// function calculate(a:number,b:number, operation:'*'):number
// function calculate(a:number,b:string, operation:'*'):string
// function calculate(a:string,b:string, operation:'+'):string
// function calculate(a:any,b:any, operation:'+'|'*'):any{
//   if(operation === '+') return a+b
//   if(operation === '*' && typeof b === 'string'){
//     return b.repeat(a)
//   }
//   return a*b
// }
// console.log(calculate(2, 3, "+"))
// console.log(calculate(2, 3, "*") )
// console.log(calculate(2, 'OK', "*"))
// console.log(calculate("2", "3", "+"))
// 2. Форматування дати Функція formatDate:
// •	приймає Date і повертає рядок формату YYYY-MM-DD;
// •	або приймає string і повертає Date.
// function formatDate(val:Date):string
// function formatDate(val:string):Date
// function formatDate(val:any):string|Date{
//   if(typeof val === 'string') return new Date(val)
//   else return val.toISOString().split('T')[0]
// }
// //! Оцінка чи правильно працює якась умова
// console.assert(formatDate(new Date('2025-10-14')) === '2025-10-14','Error with Date')
// console.assert(formatDate('2025-10-14') instanceof Date)
// 3. Перевантаження для логування. Функція log:
// •	якщо передано string → просто друкує,
// •	якщо string[] → друкує кожен рядок окремо.
// // Перевірка (в консолі)
// function myLog(val:string):void
// function myLog(val:string[]):void
// function myLog(val:any):void{
//   if(Array.isArray(val)){
//     console.log(val.join('\n'))
//   }
//   else console.log(val)
// }
// myLog('One message')
// myLog(['Line 1', 'Line 2'])
// 4. Пошук користувача. Функція findUser:
// •	якщо передано id: number → повертає користувача з масиву за id;
// •	якщо name: string → шукає користувача за іменем.
// type User = {
//   id:number,
//   name:string
// }
// function findUser(id:number, usersList:User[]):User
// function findUser(name:number, usersList:User[]):User
// function findUser(searchParam:number|string, usersList:User[]):User|undefined{
//   if(typeof searchParam==='number'){
//     return usersList.find(user=>user.id===searchParam)
//   }else return usersList.find(user=>user.name === searchParam)
// }
// const users: User[]=[
//   {id:1, name: 'Andrij'},
//   {id:2, name: 'Olena'},
// ]
// console.assert(findUser(1,users).name === 'Andrij')
// console.assert(findUser(2,users).name === 'Olena')
// 5. Перетворення у верхній/нижній регістр. Функція changeCase:
// •	якщо передано один рядок → повертає toUpperCase(),
// •	якщо два рядки й 'lower' → об’єднує і знижує регістр.
// function changeCase(str:string):string
// function changeCase(a:string,b:string, mode:'lower'):string
// function changeCase(a:string,b?:string, mode?:'lower'):string{
//   if(mode){
//     return `${a}${b}`.toLowerCase()
//   }else return a.toUpperCase()
// }
// console.assert(changeCase('hello') === 'HELLO')
// console.assert(changeCase('He','LLo','lower') === 'hello')
// 6. Гнучка функція reverse. Функція reverse:
// •	якщо передано рядок → повертає перевернутий рядок;
// •	якщо передано масив → повертає копію з елементами у зворотньому порядку;
// function myReverse(val:string):string
// function myReverse(val:any[]):any[]
// function myReverse(val:any[] | string):any[]|string{
//   if(Array.isArray(val)) return [...val].reverse()
//   else return val.split('').reverse().join('')
// }
// console.log(myReverse('Hello'))
// console.log(myReverse([1,2,3,4,5]))
// 7. Злиття або порівняння. Функція processInput приймає або два масиви — зливає їх, або два числа — повертає різницю.
// function processInput(a:any[],v:any[]):any[]
// function processInput(a:number, b:number):number
// function processInput(a:any, b:any):any{
//   if(Array.isArray(a) && Array.isArray(b)) return [...a, ...b] 
//   else return a-b
// }
// console.log(processInput(9,2))
// console.log(processInput([1,2,3],[4,5]))
// ========================== union ==================================
// 1.	Форматування повідомлення. Функція formatMessage приймає або рядок, або число(повертає рядок з символом «#»), і повертає рядок (у верхньому регістрі).
// function formatMessage(val:string | number): string {
//   if(typeof val === 'number') return `#${val}`
//   else return val.toUpperCase()
// }
// console.log(formatMessage('hello'));
// console.log(formatMessage(42));
// 2.	Визначення площі фігури. Створи типи для Circle і Rectangle та функцію getArea(shape), що обчислює площу залежно від типу фігури.
//*тут є поле за допомогою якого можно визначити тип фігури kind. перевіряємо його значення и з'ясовуємо тип
// type Circle = {kind:'circle'; radius:number}
// type Rectangle = {kind:"rectangle"; width:number; height:number}
// type Shape = Circle | Rectangle
// function getArea(shape:Shape):number{
//   if(shape.kind==='circle') return Math.PI*shape.radius**2
//   else return shape.height*shape.width
// }
// console.log(getArea({kind:'circle', radius:5}).toFixed(2))
// console.log(getArea({kind:'rectangle', width:10, height:4}).toFixed(2))
// 3.	Обробка помилки або успішного результату. Тип Result може бути або Success, або Error. Напиши функцію, яка друкує результат.
// type Success = {status: 'success'; data:string};
// type Failure = {status: 'error'; message:string};
// type Result = Success | Failure
// function handleResult(res:Result):void{
//   if(res.status === 'success') console.info(res.data)
//   else console.error(res.message)
// }
// handleResult({status:'success', data:'Saved'})
// handleResult({status:'error', message:'Failed to save'})
// 4.	Прийом різних форматів часу. Функція toDate приймає або Date, або рядок, і повертає Date.
// function toDate(data:Date|string):Date{
//   if(data instanceof Date) return data
//   else return new Date(data)
// }
// console.log(toDate('2025-10-14'))
// console.log(new Date())
// =============== enum ==================
// 1.	Визначення днів тижня. Перевірити чи вихідний.
// enum WeekDay {
//   Sun,
//   Mon,
//   Tue,
//   Wen,
//   Thu,
//   Fri,
//   Sat,
// }
// function isWeekend(day:WeekDay):boolean{
//   return day === WeekDay.Sun || day===WeekDay.Sat
// }
// console.log(isWeekend(WeekDay.Sat))
// 2.	Є чіткий набір можливих варіантів (up/down/left/right) і важливо уникнути орфографічних помилок. 
// Зробити функцію, яка б воводила напрямок у верхньому регістрі.
// enum Direction {
//   Up = 'up',
//   Down = 'down',
//   Left = 'left',
//   Right = 'right',
// }
// function dirToUpperCase(dir:Direction):string{
//   return dir.toUpperCase()
// }
// console.log(dirToUpperCase(Direction.Up))
// 3.	Рівні логування. Треба задати стабільні рівні логів (тип логів: Info,  Warn,  Error). 
// Ррозробити функції для логування з використанням відповідних методів.
// enum LevelType{
//   Info,
//   Warn,
//   Error,
// }
// function myLog(type:LevelType, msg:string):void{
//   switch (type) {
//     case LevelType.Info:
//       console.info(msg)
//       break;
//     case LevelType.Warn:
//       console.warn(msg)  
//       break
//     case LevelType.Error:
//       console.error(msg)
//       break  
//     default:
//       const _check:never = type
//       break;
//   }
// }
// 4.	Статуси замовлення. Є бізнес-логіка з фіксованими станами ("pending", "shipped", "delivered", "cancelled"). 
// Дано масив об'єктів з відповідними статустами. 
// Створити функцію, яка б повертала відфільтрований список за значенням статусу.
// enum ProductStatus{
//   Pending='pending',
//   Shipped = 'shipped',
//   Delivered = 'delivered',
//   Cancelled = 'cancelled'
// }
// interface Product{
//   title: string,
//   price: number,
//   status:ProductStatus
// }
// function myFilter(searchStatus:ProductStatus, productsList:Product[]):Product[]{
//   return productsList.filter((product)=>product.status === searchStatus)
// }
// const productList:Product[] = [
//   {
//     title:'Tea',
//     price:21,
//     status: 'pending'
//   },
//   {
//     title:'Candies',
//     price:223,
//     status: 'cancelled'
//   },
//   {
//     title:'Coffee',
//     price:65,
//     status: 'shipped'
//   },
//   {
//     title:'Milk',
//     price:43,
//     status: 'pending'
//   },
//   {
//     title:'Cheese',
//     price:444,
//     status: 'pending'
//   }
// ] as Product[]
// let res = myFilter(ProductStatus.Pending, productList)
// console.log(res)
// 5.	Типи користувачів у системі.  Є фіксований набір ролей із різними правами доступу (Admin, Editor,  Viewer). Визначити кількість адмінів.
// enum UserType{
//   Admin='admin',
//   Editor='editor',
//   Viewer='viewer',
// }
// interface IUser{
//   name:string;
//   role:UserType;
// }
// const users = [
//   {
//     name:'Ivan',
//     role:'admin'
//   },
//   {
//     name:'Olga',
//     role:'editor'
//   },
//   {
//     name:'Stepan',
//     role:'admin'
//   } ,
// ] as IUser[]
// function getAdminNumber(list:IUser[]):number{
//   return users.filter(user=>user.role===UserType.Admin).length
// }
// console.log(getAdminNumber(users))
// console.log(Object.values(UserType))
// console.log(Object.keys(UserType))
// 6.	Типи користувачів у системі.  Є фіксований набір ролей із різними правами доступу  
// (Admin, Editor,  Viewer). Вони описані у порядку спадання важливості.  
// На основі заданого статусу треба визначити чи є він найвищим.
// enum UserType{
//   SuperAdmin = 'super_admin',
//   Admin='admin',
//   Editor='editor',
//   Viewer='viewer',
// }
// interface IUser{
//   name:string;
//   role:UserType;
// }
// const user:IUser = {
//   name:'Ivan',
//   role:UserType.SuperAdmin
// } 
// function hasHighestRole(user:IUser):boolean{
//   const rolesValue = Object.values(UserType)
//   return user.role === rolesValue[0]
// }
// console.log(hasHighestRole(user))
// 7.	Типи оплати. Потрібно обробляти кілька типів оплати ("cash", "card",  "applePay") у функціях чи API. 
// Визначити сумарно скільки було зроблено оплат кожним з видів
// enum PaymentType{
//   Cash = 'cash',
//   Card = 'card',
//   ApplePay = 'applePay'
// }
// interface IPayment{
//   title:string,
//   price:number,
//   paymentType:PaymentType,
// }
// const paymentsList  = [
//   {
//     title:'Tea',
//     price:21,
//     paymentType: 'cash'
//   },
//   {
//     title:'Milk',
//     price:212,
//     paymentType: 'card'
//   },
//   {
//     title:'Bread',
//     price:33,
//     paymentType: 'cash'
//   }
// ]
// function getTotalByType(productsList:IPayment[]){
//   // const res = {
//   //   [PaymentType.ApplePay]:0,
//   //   [PaymentType.Card]:0,
//   //   [PaymentType.Cash]:0,
//   // }
//   const res = Object.fromEntries(Object.values(PaymentType).map(val=> [val,0]))
//   productsList.forEach(prod=>{
//     res[prod.paymentType] = res[prod.paymentType]+prod.price
//   })
//   return res
// }
// console.log(getTotalByType(paymentsList as IPayment[]))
// 8.	Режими гри. Є фіксовані режими або складності гри (Easy,  Normal,  Hard). Розробити функцію, для визначення кількості суперників у залежності від складності (2, 5, 30).
// 9.	Статуси мережі.
// 10.	Є набір стабільних станів користувачів ("online", "offline","connecting"). Якщо користувач "offline", то повідмляти його про це.
// =============== ПЕРЕВІРКА ТИПІВ ==================
// 1.	Напиши функцію assertIsNameString, яка перевіряє, що параметр є рядком і починається з великої літери
// type NameString = string
// function assertIsNameString(val:unknown):val is NameString {
//   return typeof val === 'string' && val[0].toUpperCase() === val[0]
// }
// console.log(assertIsNameString('ivan'));
// 2.	Перевірка на число.
// function assertIsNameNumber(val:unknown):val is number {
//   return typeof val === 'number' && !isNaN(val)
// }
// console.log(assertIsNameNumber(34));
// 3.	Перевірка на об'єкт дати.
// function isDate(val:unknown): val is Date{
//   return val instanceof Date
// }
// console.log(isDate(new Date()));
// console.log(isDate('22-3-2023'));
// 4.	Перевірка на масив чисел
// function isValueArrayOfNumber(val:unknown):val is number[]{
//   return Array.isArray(val) && val.every(el=>typeof el === 'number')
// }
// console.log(isValueArrayOfNumber([11,354,5,3]));
// console.log(isValueArrayOfNumber(['11','354','5','3']));
// 5.	Перевірка на масив рядків
// 6.	Перевірка на об’єкт (не null)
// 7.	Перевірка на певний тип об’єкта
// type User = { name: string; age: number }
// function isUser(val:unknown): val is User{
//   return (
//     !!val &&
//       (typeof val === 'object') &&
//       ('name' in val) && ('age' in val) 
//       && typeof val.age ==='number' 
//       && typeof val.name === 'string')
// }
// console.log(isUser({name:'Olga','age':21}));
// console.log(isUser({name:'Olga','age':'21'}));
// console.log(isUser({name:'Olga'}));
// 8.	Перевірка типу через об’єднання (union)
// type Shape = {kind:'circle'; radius:number} | {kind:'square',size:number}
// function isCircle(shape: Shape):shape is {kind:'circle'; radius:number}{
//   return shape.kind === 'circle'
// }
// const s: Shape = {kind: 'circle', radius:5};
// if(isCircle(s)) console.log(Math.PI * s.radius**2)
// 9.	У локальному сховищі (localStorage) збережено масив об’єктів різних типів : користувачів (User) та замовлень (Order). 
// Зчитати дані з localStorage. Визначити, які елементи належать до типу User, а які — до Order. Розділити їх у два окремі масиви.
