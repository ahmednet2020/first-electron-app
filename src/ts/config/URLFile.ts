import * as url from 'url';
import * as path from 'path';

function addFile(file:string)
{
	let pathFile = url.format({
		protocol:'file:',
		pathname:path.join(__dirname, '../', `${file}`),
		slashes:true
	});
	return pathFile;
}

export default addFile;