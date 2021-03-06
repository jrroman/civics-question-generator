import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	civics = [
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is the supreme law of the land?',
			'answer': [
				'Constitution'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What does the Constitution do?',
			'answer': [
				'sets up the government',
				'defines the government',
				'protects basic rights of Americans'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'The idea of self-government is in the first three words of the Constitution. What are these words?',
			'answer': [
				'We the People'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is an amendment?',
			'answer': [
				'a change to the constitution',
				'an addition to the constitution'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What do we call the first ten amendments?',
			'answer': [
				'Bill of Rights'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is one right or freedom from the First Amendment?*',
			'answer': [
				'speech',
				'religion',
				'assembly',
				'press',
				'petition the government'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'How many amendments does the Constitution have?',
			'answer': [
				27,
				'twenty seven'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What did the Declaration of Independence do?',
			'answer': [
				'announced our independence',
				'declared our independence',
				'said that the United States is free',
			]
		},
		{
			'multiAnswer': 2,
			'type': 'Principles of American Democracy',
			'question': 'What are two rights in the Declaration of Independence?',
			'answer': [
				'life',
				'liberty',
				'pursuit of happiness'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is freedom of religion?',
			'answer': [
				'You can practice any religion, or not practice a religion'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is the economic system in the United States?*',
			'answer': [
				'capitalist economy',
				'market economy'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Principles of American Democracy',
			'question': 'What is the “rule of law”?',
			'answer': [
				'Everyone must follow the law',
				'Leaders must obey the law',
				'Government must obey the law',
				'No one is above the law'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Name one branch or part of the government.*',
			'answer': [
				'Congress',
				'legislative',
				'President',
				'executive',
				'courts',
				'judicial'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What stops one branch of government from becoming too powerful?',
			'answer': [
				'checks and balances',
				'separation of powers'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who is in charge of the executive branch?',
			'answer': [
				'President'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who makes federal laws?',
			'answer': [
				'Senate and House of Representatives'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'How many U.S. Senators are there?',
			'answer': [
				100,
				'one hundred'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'We elect a U.S. Senator for how many years?',
			'answer': [
				6,
				'six'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who is one of your state’s U.S. Senators now?*',
			'answer': [
				'Robert Menendez',
				'Cory Booker'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'The House of Representatives has how many voting members',
			'answer': [
				435,
				'four hundred thirty five'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'We elect a U.S. Representative for how many years?',
			'answer': [
				2,
				'two'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Name your U.S. Representative.',
			'answer': [
				'Donald Norcross'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who does a U.S. Senator represent?',
			'answer': [
				'all people of the state'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Why do some states have more Representatives than other states?',
			'answer': [
				'the states population',
				'state population',
				'population',
				'they have more people',
				'some states have more people'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'We elect a President for how many years?',
			'answer': [
				4,
				'four'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'In what month do we vote for President?',
			'answer': [
				'November'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the name of the President of the United States now?*',
			'answer': [
				'Barack Obama',
				'Obama'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the name of the Vice President of the United States now?',
			'answer': [
				'Joseph R. Biden, Jr.',
				'Joe Biden',
				'Biden'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'If the President can no longer serve, who becomes President?',
			'answer': [
				'Vice President',
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'If both the President and the Vice President can no longer serve, who becomes President?',
			'answer': [
				'Speaker of the House'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who is the Commander in Chief of the military?',
			'answer': [
				'President'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who signs bills to become laws?',
			'answer': [
				'President',
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who vetoes bills?',
			'answer': [
				'President'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What does the President\'s cabinet do?',
			'answer': [
				'advises the President',
				'advise the President'
			]
		},
		{
			'multiAnswer': 2,
			'type': 'System of Government',
			'question': 'What are two Cabinet-level positions?',
			'answer': [
				'Secretary of Agriculture',
				'Secretary of Commerce',
				'Secretary of Defense',
				'Secretary of Education',
				'Secretary of Energy',
				'Secretary of Health and Human Services',
				'Secretary of Homeland Security',
				'Secretary of Housing and Urban Development',
				'Secretary of the Interior',
				'Secretary of Labor',
				'Secretary of State',
				'Secretary of Transportation',
				'Secretary of the Treasury',
				'Secretary of Veterans Affairs',
				'Attorney General',
				'Vice President',
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What does the judicial branch do?',
			'answer': [
				'reviews laws',
				'explains laws',
				'resolves disputes',
				'decides if a law goes against the Constitution'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the highest court in the United States?',
			'answer': [
				'the Supreme Court'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'How many justices are on the Supreme Court?',
			'answer': [
				'nine',
				9
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who is the Chief Justice of the United States now?',
			'answer': [
				'John G. Roberts, Jr.',
				'John Roberts'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
			'answer': [
				'to print money',
				'to declare war',
				'to create an army',
				'to make treaties'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Under our Constitution, some powers belong to the states. What is one power of the states?',
			'answer': [
				'provide schooling and education',
				'provide protection',
				'provide safety',
				'give a drivers license',
				'approve zoning and land use'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'Who is the Governor of your state now',
			'answer': [
				'Chris Christie'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the capital of your state?*',
			'answer': [
				'Trenton'
			]
		},
		{
			'multiAnswer': 2,
			'type': 'System of Government',
			'question': 'What are the two major political parties in the United States?*',
			'answer': [
				'Democratic and Republican'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the political party of the President now?',
			'answer': [
				'Democratic'
			]
		},
		{
			'multiAnswer': false,
			'type': 'System of Government',
			'question': 'What is the name of the Speaker of the House of Representatives now?',
			'answer': [
				'Paul D. Ryan',
				'Paul Ryan'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'There are four amendments to the Constitution about who can vote. Describe one of them',
			'answer': [
				'Citizens 18 and older',
				'You dont have to pay to vote',
				'Any citizen can vote',
				'A male citizen of any race can vote'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'What is one responsibility that is only for United States citizens?*',
			'answer': [
				'serve on a jury',
				'vote in federal election'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'Name one right only for United States citizens.',
			'answer': [
				'vote in federal election',
				'run for federal office'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'What are two rights of everyone living in the United States?',
			'answer': [
				'freedom of expression',
				'freedom of speech',
				'freedom of assembly',
				'freedom to petition the government',
				'freedom of religion',
				'the right to bear arms'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'What do we show loyalty to when we say the Pledge of Allegiance?',
			'answer': [
				'the United States',
				'the flag'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'What is one promise you make when you become a United States citizen?',
			'answer': [
				'give up loyalty to other countries',
				'defend the Constitution and laws of the United States',
				'obey the laws of the United States',
				'serve in the U.S. military (if needed)',
				'serve (do important work for) the nation (if needed)',
				'be loyal to the United States'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'How old do citizens have to be to vote for President?*',
			'answer': [
				'eighteen',
				18
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'What are two ways that Americans can participate in their democracy?',
			'answer': [
				'vote',
				'join a political party',
				'help with a campaign',
				'join a civic group',
				'join a community group',
				'give an elected official your opinion on an issue',
				'call Senators and Representatives',
				'publicly support or oppose an issue or policy',
				'run for office',
				'write to a newspaper',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'When is the last day you can send in federal income tax forms?*',
			'answer': [
				'April 15'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Rights and Responsibilities',
			'question': 'When must all men register for the Selective Service?',
			'answer': [
				18,
				'18 to 26',
				'at age eighteen',
				'between eighteen and twenty-six',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'What is one reason colonists came to America?',
			'answer': [
				'freedom',
				'political liberty',
				'religious freedom',
				'economic opportunity',
				'practice their religion',
				'escape persecution',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'Who lived in America before the Europeans arrived?',
			'answer': [
				'American Indians',
				'Native Americans'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'What group of people was taken to America and sold as slaves?',
			'answer': [
				'Africans',
				'people from Africa'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'Why did the colonists fight the British?',
			'answer': [
				'high taxes',
				'taxation without representation',
				'British army stayed in their houses',
				'boarding and quartering',
				'no self-government',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'Who wrote the Declaration of Independence?',
			'answer': [
				'Thomas Jefferson'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'When was the Declaration of Independence adopted?',
			'answer': [
				'July 4, 1776'
			]
		},
		{
			'multiAnswer': 3,
			'type': 'Colonial Period and Independence',
			'question': 'There were 13 original states. Name three.',
			'answer': [
				'New Hampshire',
				'Massachusetts',
				'Rhode Island',
				'Connecticut',
				'New York',
				'New Jersey',
				'Pennsylvania',
				'Delaware',
				'Maryland',
				'Virginia',
				'North Carolina',
				'South Carolina',
				'Georgia'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'What happened at the Constitutional Convention?',
			'answer': [
				'The Constitution was written',
				'The Founding Fathers wrote the Constitution'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'When was the Constitution written',
			'answer': [
				1787
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
			'answer': [
				'James Madison',
				'Alexander Hamilton',
				'John Jay',
				'Publius'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'What is one thing Benjamin Franklin is famous for?',
			'answer': [
				'U.S. diplomat',
				'oldest member of the Constitutional Convention',
				'first Postmaster General of the United States',
				'writer of "Poor Richards Almanac"'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'Who is the "Father of Our Country"?',
			'answer': [
				'George Washington'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Colonial Period and Independence',
			'question': 'Who was the first President?',
			'answer': [
				'George Washington'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'What territory did the United States buy from France in 1803?',
			'answer': [
				'Louisiana Territory',
				'Louisiana'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'Name one war fought by the United States in the 1800s.',
			'answer': [
				'War of 1812',
				'Mexican American War',
				'Mexican-American War',
				'Civil War',
				'Spanish American War',
				'Spanish-American War'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'Name the U.S. war between the North and the South.',
			'answer': [
				'Civil War',
				'War between the States',
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'Name one problem that led to the Civil War.',
			'answer': [
				'slavery',
				'economic reasons',
				'states rights'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'What was one important thing that Abraham Lincoln did?*',
			'answer': [
				'freed the slaves (Emancipation Proclamation)',
				'saved the Union',
				'led the United States during the Civil War'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'What did the Emancipation Proclamation do?',
			'answer': [
				'freed the slaves',
				'freed the slaves in the Confederacy',
				'freed the slaves in the Confederate states',
				'freed slaves in most Southern States'
			]
		},
		{
			'multiAnswer': false,
			'type': '1800s',
			'question': 'What did Susan B. Anthony do?',
			'answer': [
				'womens rights',
				'civil rights'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Name one war fought by the United States in the 1900s.*',
			'answer': [
				'World War I',
				'World War II',
				'Korean War',
				'Vietnam War',
				'Gulf War'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Who was President during World War I',
			'answer': [
				'Woodrow Wilson'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Who was the President during the Great Depression and World War II?',
			'answer': [
				'Franklin Roosevelt'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Who did the Unted States fight in World War II',
			'answer': [
				'Japan, Germany, Italy'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Before he was President, Eisenhower was a general. What war was he in?',
			'answer': [
				'World War II',
				'World War 2'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'During the Cold War, what was the main concern of the United States',
			'answer': [
				'Communism'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'What movement tried to end radical discrimination?',
			'answer': [
				'civil rights movement'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'What did Martin Luther King, Jr. do?*',
			'answer': [
				'Fought for civil rights',
				'worked for equality for all Americans'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'What major event happened on September 11th, 2001, in the United States?',
			'answer': [
				'Terrorists attacked the United States'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Recent American History and Other Important Historical Information',
			'question': 'Name one American Indian tribe in the United States.',
			'answer': [
				'Cherokee',
				'Navajo',
				'Sioux',
				'Chippewa',
				'Choctaw',
				'Pueblo',
				'Apache',
				'Iroquois',
				'Creek',
				'Blackfeet',
				'Seminole',
				'Cheyenne',
				'Arawak',
				'Shawnee',
				'Mohegan',
				'Huron',
				'Oneida',
				'Lakota',
				'Crow',
				'Teton',
				'Hopi',
				'Inuit',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Name one of the longest rivers in the United States.',
			'answer': [
				'Missouri',
				'Missouri River',
				'Mississippi',
				'Mississippi River'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'What ocean is on the West Coast of the United States?',
			'answer': [
				'Pacific Ocean',
				'Pacific'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'What ocean is on the East Coast of the United States',
			'answer': [
				'Atlantic Ocean',
				'Atlantic'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Name one U.S. territory',
			'answer': [
				'Puerto Rico',
				'U.S. Virgin Islands',
				'Virgin Islands',
				'American Samoa',
				'Northern Mariana Islands',
				'Guam',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Name one state that borders Canada.',
			'answer': [
				'Maine',
				'New Hampshire',
				'Vermont',
				'New York',
				'Pennsylvania',
				'Ohio',
				'Michigan',
				'Minnesota',
				'North Dakota',
				'Montana',
				'Idaho',
				'Washington',
				'Alaska',
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Name one state that borders Mexico.',
			'answer': [
				'California',
				'Arizona',
				'New Mexico',
				'Texas'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'What is the capital of the United States?*',
			'answer': [
				'Washington, D.C.',
				'Washington DC',
				'Washington D.C.'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Where is the Statue of Liberty?*',
			'answer': [
				'New York',
				'Liberty Island',
				'New Jersey',
				'Near New York City',
				'on the Hudson River'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Why does the flag have 13 stripes?',
			'answer': [
				'there were 13 original colonies',
				'stripes represent the original colonies'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'Why does the flag have 50 stars?*',
			'answer': [
				'one star for each state',
				'each star represents a state',
				'50 states'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Geography',
			'question': 'What is the name of the national anthem?',
			'answer': [
				'Star Spangled Banner'
			]
		},
		{
			'multiAnswer': false,
			'type': 'Holidays',
			'question': 'When do we celebrate Independence Day?*',
			'answer': [
				'July 4th',
				'July 4',
				'Fourth of July'
			]
		},
		{
			'multiAnswer': 2,
			'type': 'Holidays',
			'question': 'Name two national U.S. holidays.',
			'answer': [
				'New Year’s Day',
				'Martin Luther King, Jr. Day',
				'Presidents’ Day',
				'Memorial Day',
				'Independence Day',
				'Labor Day',
				'Columbus Day',
				'Veterans Day',
				'Thanksgiving',
				'Christmas',
			]
		},
	];

	constructor() {}

	idx: number = Math.floor(Math.random() * this.civics.length);
	multipleAnswers = this.civics[this.idx].multiAnswer;
	displayQuestion(): string {
		return this.civics[this.idx].question;
	}

	displayType(): string {
		return this.civics[this.idx].type;
	}

	questionNumber = 1;
	clickCount(): void {
		this.questionNumber++;
		this.idx = Math.floor(Math.random() * this.civics.length);
	}

	correct = 0;
	calculateScore(): string {
		return "Your score is: " + (this.correct / 10) * 100 + "%";
	}

	showAns = false;
	showAnswer(): boolean {
		if (!this.showAns) {
			this.showAns = true;
			return this.showAns;
		}
		this.showAns = false;
	}

	answerHelper() {
		let previewAnswer = this.civics[this.idx].answer;
		return previewAnswer;
	}


	localHistory = [];
	saveHistory(state): Array<any> {
		this.localHistory.push(state);
		if (this.questionNumber == 11) {
			this.localHistory = [];
		}
		return this.localHistory;
	}

	answerStatus = '';
	checkAnswer(event): void {
		if (event === 13) {
			let correctAnswer: any = this.civics[this.idx].answer;
			let userAnswer = (<HTMLInputElement>document.querySelector('#user-input')).value;
			let lowerCorrectAnswer = correctAnswer.map(x => x.toString().toLowerCase());
			let lowerUserAnswer = userAnswer.toString().toLowerCase();

			console.log(lowerUserAnswer.substring(0, lowerUserAnswer.length));
			console.log(lowerCorrectAnswer.indexOf(lowerUserAnswer));
			if (lowerCorrectAnswer.indexOf(lowerUserAnswer) > -1) {
				console.log("correct: ", lowerCorrectAnswer);
				console.log("user: ", lowerUserAnswer);
				console.log('correct');
				this.correct++;
				this.answerStatus = 'Correct!';
			} else {
				console.log("correct: ", lowerCorrectAnswer);
				console.log("user: ", lowerUserAnswer);
				console.log('incorrect');
				this.answerStatus = 'Incorrect...';
			}
			let history = {
				'question': this.civics[this.idx].question,
				'answer': userAnswer,
				'realAnswer': correctAnswer,
				'answerStatus': this.answerStatus,
			}
			this.saveHistory(history);

			(<HTMLInputElement>document.querySelector('#user-input')).value = '';
			this.showAns = false;
			this.clickCount();
		}
	}
};

