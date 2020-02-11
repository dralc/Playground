function findGroups() {
	let groups_re = /([\w]*)<mark>([^<>]+)<\/mark>([\w]*)+/ig;
	let text = 'Roc<mark>ket</mark>man some text Moto<mark>rola</mark>s';
	
	// String.match() doesn't return groupings :( it just returns all full matches
	let ar = text.match(groups_re) /*?*/
	
	// RegExp.exec() returns a rich result with the groupings :) and all the matches but
	// you'll have to re-run it until there aren't any more matches to consume
	// NB. in order to iterate over the matches:
	// - Must use RegExp flags 'g' or 'y' otherwise there won't be an internal counter to iterate on
	// - DON'T re-define the regexp within the while loop or you'll keep resetting exec()'s internal counter to 0
	let ar2;
	while (ar2 = groups_re.exec(text)) {
		// full match
		ar2[0] /*?*/
		//group 1
		ar2[1] /*?*/
		//group 2
		ar2[2] /*?*/
		//group 3
		ar2[3] /*?*/
	} 
}

function parseAttribs() {
	const text = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKhloeKardashian%2Fposts%2F10157313873347302&amp;width=500" width="500" height="688" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
	const re = /([a-z]+)="([^"]+)"/ig,
		attribs = {};
	let ar;

	while(ar = re.exec(text)) {
		attribs[ar[1]] = ar[2]
	}

	attribs /*?*/
}

findGroups()
parseAttribs();
