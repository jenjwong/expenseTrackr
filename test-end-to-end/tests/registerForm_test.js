Feature('Registration and Login');

Scenario('Unauthorized users cannot login', (I) => {
  I.amOnPage('/');
  I.see('Submit');
  I.fillField('Email', 'noAccount@test.com');
  I.fillField('Password', 'fail');
  I.click('Submit');
  I.seeInCurrentUrl('/login');
});

Scenario('Toggle between register and login', (I) => {
  I.amOnPage('/');
  I.click('register');
  I.seeInCurrentUrl('/register');
  I.fillField('Email', 'test@test.com');
  I.fillField('Password', 'test');
  I.fillField('Name', 'test');
  I.click('login');
  I.seeInCurrentUrl('/login');
});

Scenario('Users must have unique email address to register', (I) => {
  I.amOnPage('/');
  I.click('register');
  I.seeInCurrentUrl('/register');
  I.fillField('Name', 'test');
  I.fillField('Email', 'test@test.com');
  I.fillField('Password', 'test');
  I.click('login');
  I.fillField('Email', 'test@test.com');
  I.fillField('Password', 'test');
  I.click('Submit');
  I.waitForElement('nav', 7);
  I.seeInCurrentUrl('/dashboard');
});

Scenario('User can login', (I) => {
  I.amOnPage('/');
  I.fillField('Email', 'test@test.com');
  I.fillField('Password', 'test');
  I.click('Submit');
  I.waitForElement('nav', 7);
  I.seeInCurrentUrl('/dashboard');
});
