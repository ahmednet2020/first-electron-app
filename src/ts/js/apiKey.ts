import { ChatManager, TokenProvider } from '@pusher/chatkit';

const instanceLocator: string = 'v1:us1:76612074-e007-4f81-8094-7a6657e66b85';
const url: string = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/76612074-e007-4f81-8094-7a6657e66b85/token';

let user: any;
const messagesList: any = document.querySelector("#messagesList");
const roomsUl: any = document.querySelector("#rooms-ul"); 
const chatManager:ChatManager = new ChatManager({
	instanceLocator,
	userId: 'admin',
	tokenProvider: new TokenProvider({ url })
});
chatManager.connect()
	.then((currentUser: any) => {
		user = currentUser;
		getRooms(currentUser);
	})

function getRooms(currentUser: any) {
	roomsUl.innerHTML = '';
	Promise.all(currentUser.rooms.map((room: any) => {
		return printRoom(room);
	})).then((roomArry: any) => {
		roomArry.map((room: any) => {
			room.firstElementChild.addEventListener('click', Subscriptions);
			roomsUl.appendChild(room);
		})
	}).catch((error: any) => { console.log(error) })
}
function printRoom(room: any)
{
	let li: HTMLElement = document.createElement('li');
	let btn: HTMLElement = document.createElement('button');
	btn.className = 'btn btn-white';
	btn.setAttribute('type', 'button');
	btn.dataset.id = room.id;
	btn.textContent = room.name;
	li.appendChild(btn);
	return li;
}

function Subscriptions(e: Event)
{
	e.preventDefault();
	let roomId = Number(this.dataset.id);
	messagesList.innerHTML = '';
	for (let key in user.roomSubscriptions) {
		user.roomSubscriptions[key].cancel()
	}
	user.subscribeToRoom({
		roomId,
		hooks: {
			onNewMessage: (message:any) => {
				let messageString: string = printMessage(message);
				messagesList.innerHTML += messageString;
			}
		},
		messageLimit: 5
	})
}

function printMessage(message:any):string {
	let messageString:string = `<div class="message">
            <h4 class="message-sander">${message.senderId}</h4>
            <div class="message-data">
              <p class="message-text">${message.text}</p>
              <span class="time">${message.createdAt}</span>
            </div>
          </div>`;
	return messageString;
}
