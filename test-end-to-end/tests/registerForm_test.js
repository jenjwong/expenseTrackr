Feature('RegisterForm');

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
  I.click('login');
  I.seeInCurrentUrl('/login');
});

Scenario('Logs-in test user', (I) => {
  I.amOnPage('/');
  I.fillField('Email', 'test@test.com');
  I.fillField('Password', 'test');
  I.click('Submit');
  I.waitForElement('nav', 5);
  I.seeInCurrentUrl('/dashboard');
});
