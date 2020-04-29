var john = {
	fullName: 'John Smith',
	bills: [124,48,268,180,42],
	calcTip: function(){
		this.tip=[];
		this.total = [];
		
		for(var i=0; i<john.bills.length; i++){
				var percentage;
				var bill = this.bills[i];
				if(bill<50){
					percentage = 0.2;
				}
				else if(bill>=50 && bill<200){
					percentage = 0.15;
				}			
				else if(bill>=200){
					percentage = 0.1;
				}

				this.tip[i] = percentage * bill;
		     	this.total[i] = bill + percentage * bill;
		}
	}
}

john.calcTip();
console.log(john);