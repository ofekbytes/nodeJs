const contact = {
    name:'jron',
    id:123456789,
    welcome() {
      console.log('welcome ' + this.name + ' have a nice day');
    },
  
  }
  
  console.log(contact);
  console.log(contact.welcome());
  