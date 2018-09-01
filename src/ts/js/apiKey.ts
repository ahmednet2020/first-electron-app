import { ChatManager, TokenProvider } from '@pusher/chatkit';

const instanceLocator: string = 'v1:us1:76612074-e007-4f81-8094-7a6657e66b85';
const url: string = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/76612074-e007-4f81-8094-7a6657e66b85/token';
let user: any;
const messagesList: HTMLElement = <HTMLElement>document.querySelector("#messagesList");
const roomsUl: HTMLElement = <HTMLElement>document.querySelector("#rooms-ul");
const membersUl: HTMLElement = <HTMLElement>document.querySelector("#members-ul"); 


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
	currentUser.rooms
		.sort((a: any, b: any) => a.name - b.name)
		.map((room: any) => {
			return printRoom(room);
		}).map((room: any) => {
			room.firstElementChild.addEventListener('click', Subscriptions);
			roomsUl.appendChild(room);
		})
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

function Subscriptions(e: Event): void
{
	e.preventDefault();
	let roomId = Number(this.dataset.id);
	let el = this.parentNode;
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
	getUsers(roomId);
	// toggel class to active room
	Array.prototype.filter.call(el.parentNode.children, function(child: any) {
		if (child !== el) {
			child.classList.remove('active');
		}
		el.classList.add('active');
		return child;
	});
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

function getUsers(roomId:any) {
	let users: any = user.rooms.filter((room: any) => room.id === roomId);
	let usersString: any = printUsers(users[0].users);
	membersUl.innerHTML = usersString;

}

function printUsers(users:any[]) {
	let members: any[] = users.map((member:any) => {
		let state: string = 'offline';
		if (member.presence.state === 'online')
		{
			state = 'online';
		}
		let memberString = `<li><div class="member">
                  <h6 class="member-name">${member.name}</h6>
                  <p class="member-state"><span class="state ${state}"></span>${state}</p>
                </div></li>`;
		return memberString;
	});
	return members;
}