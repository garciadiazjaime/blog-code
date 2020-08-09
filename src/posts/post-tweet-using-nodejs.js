export default {
  title: 'How to post a tweet using nodejs?',
  slug: 'post-tweet-using-nodejs',
  html: `
    <p>
      Twitter allows to create an app that can automate certain tasks like tweeting from a script.
    </p>

    <p>
      In order to tweet from nodejs we need to: <br />
      <ul>
        <li>Create a <b>twitter account</b>.</li>
        <li><b>Register an app</b> inside twitter.</li>
        <li><b>Grab keys and tokens</b> generated for the app.</li>
        <li>Use <b>twitter-lite</b> npm package to tweet from nodejs.</li>
      </ul>
    </p>

    <p>
      You can find the source code on <a href="https://github.com/garciadiazjaime/demo-tweet-using-nodejs" target="_blank" rel="nofollow">github</a>.
      Once you clone it, remember to run: <i>npm install</i>.
      <br /><br />
      In the next steps I'm going to mention some important steps.
    </p>

    <br />

    <h2>1) Twitter account. </h2>
    <p>
      This is the easiest part, if you don't have a twitter account then just go to  <a href="https://twitter.com/" target="_blank" rel="nofollow">Twitter<a> an open one.
    </p>

    <br />


    <h2>2) Register an app.</h2>
    <p>
      In order to tweet from a script we need to get permission (keys and tokens). 
      <br />
      To get permission we need to register an app.
      <br />
      To regist an app let's:
      <ul>
        <li>Go to <a href="https://developer.twitter.com/" target="_blank" rel="nofollow">developer.twitter.com<a/>.</li>
        <li>
          Hover under your username and from the dropdown menu click <a href="https://developer.twitter.com/en/apps" target="_blank" rel="nofollow">apps</a>.
          
          <br /><br />
          <img src="/post-tweet-using-nodejs/twitter-apps.png" alt="Twitter apps" />
          <br /><br />
        </li>
        <li>
          Click on the button <a href="https://developer.twitter.com/en/apps/create" target="_blank" rel="nofollow">Create an app</a> (Top right corner).

          <br /><br />
          <img src="/post-tweet-using-nodejs/twitter-create-app.png" alt="Twitter create app" />
          <br /><br />
        </li>
        <li>
          Fillout the form and click "Create" (button at the bottom).
          <br />
          <br />
          Feel free to only fill out those fields marked as required.
          <br /><br />
            <ul>
              <li>App name (this needs to be unique).</li>
              <li>Application description.</li>
              <li>Website URL (<i>you can type any valid URL here</i>).</li>
              <li>
                Tell us how this app will be used (this needs to be 100 length).
                <br />
                <i>eg. This app is for learning purposes. At this point the goal is to learn how to post a tweet using nodejs</i>.
              </li>
            </ul>
          
          <br /><br />
          <img src="/post-tweet-using-nodejs/twitter-create-app-form.png" alt="Twitter create app form" />
          <br /><br />
        </li>
        <li>Finally click <b>create</b></li>
      </ul>
    </p>

    <br />

    <h2>3) Copy Keys and Tokens</h2>
    <p>
      Once the app is created you need to get the <b>keys and tokens</b>.
      <ul>
        <li>
          From the confirmation window you can click "Keys and tokens".
        </li>
        <li>
          This will take you to another window where you can see your <b>keys</b> and a <b>generate</b> button, let's click it.

          <br /><br />
          <img src="/post-tweet-using-nodejs/twitter-keys-tokens.png" alt="Twitter app keys and tokens" />
          <br /><br />
        </li>
        <li>
          This will open a modal showing your tokens, let's copy them and paste them into your editor.

          <br /><br />
          <img src="/post-tweet-using-nodejs/twitter-app-tokens.png" alt="Twitter app tokens" />
          <br /><br />
        </li>
      </ul>
    </p>

    <br />
    <h2>4) Write some code</h2>
    <p>
      Thanks to <a href="https://www.npmjs.com/package/twitter-lite" target="_blank" rel="nofollow">twitter-lite</a> npm package the coded needed is very simple. You can find the source code on <a href="https://github.com/garciadiazjaime/demo-tweet-using-nodejs" target="_blank" rel="nofollow">github</a>, but esentially you only need these lines:
    </p>
<pre>
const Twitter = require('twitter-lite');

async function main() {
  const client = new Twitter({
    consumer_key: 'API key',
    consumer_secret: 'API secret key',
    access_token_key: 'Access token',
    access_token_secret: 'Access token secret',
  });

  await client.get('account/verify_credentials');

  const status = 'nodejs rocks';

  await client.post('statuses/update', { status });

  console.log('done :) time to check your twitter');
}

main()
</pre>

    <br />
    <p>
      That's it :D if you execute the code you should see a <b>nodejs rocks</b> tweet on your account :)
    </p>
<pre>
$ node main.js
done :) time to check your twitter
</pre>
    <br />
    <p>
      <img src="/post-tweet-using-nodejs/tweet-using-nodejs.png" alt="Tweet using nodejs" />
    </p>
  `
}
