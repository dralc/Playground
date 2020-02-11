function findGroups() {
	let groups_re = /([\w]*)<mark>([^<>]+)<\/mark>([\w]*)+/ig;
	let text = 'Roc<mark>ket</mark>man some text Moto<mark>rola</mark>s';
	
	// String.match() doesn't return groupings :( it just returns all full matches
	let ar = text.match(groups_re) /*?*/
	
	// RegExp.exec() returns a rich result with the groupings :) and all the matches but
	// you'll have to re-run it until there aren't any more matches to consume
	// NB. DON'T re-define the regexp within the while loop or you'll keep resetting
	// exec()'s internal counter to 0
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

findGroups()