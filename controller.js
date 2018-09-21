// interface MessageState {
//     message: string;
//   }
  
//   class MessageController {
//     private _state: MessageState;
  
//     constructor() {
//       console.log(345345345)
//       this._state = this.defaultState;
//     }
  
//     get defaultState() {
//       return {
//         message: '',
//       }
//     }
  
//     _update(props: Partial<MessageState>) {
//       Object.assign(this._state, props);
//     }
  
//     setMessage(message: string) {
//       this._update({message});
//     }
  
//     getHtml(): string {
//       return `<h1>${this._state.message}</h1>`;
//     }
//   }
  
//   export default new MessageController();

// import angular from 'angular';

// exports.sayHelloInEnglish = function () {
//   return 'Hello';
// }

// var myModule = function() {
//   console.log(4234234);
//   return true;
// }

// export default myModule;

const root = document.createElement("div")
root.innerHTML = '123123';
document.body.appendChild(root)