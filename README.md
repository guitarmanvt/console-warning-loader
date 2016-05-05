console-warning-loader
======================

webpack loader that logs warnings for matching files.


Why I needed this
-----------------

I had a Django project that also contained React Component asset files. I was
storing the React static files in Django's "static" folders, which was bad.
I wanted to move them all to "assets" folders, but I did not want to risk
missing any...or having a team mate be unaware of the change.

So, in addition to moving the files and telling everyone, I decided to add this
warning whenever webpack finds a React component file in the Django "static"
folders.

There are tons of webpack loaders on NPM, but none did anything quite this
simple. So, here it is.


Example usage in webpack.config
-----------------------

The easiest way is to setup this as a `preLoader`. Anything you add to the
`query` will be dumped to the console with your warning.


    preLoaders: [
      {
        test: /.*\/static\/.*/,
        loader: 'console-warning-loader',
        query: {
          'WARNING': 'Found asset in Django "static" folder. Please move to "assets" folder.'
        },
      }


Example output
--------------

When you run webpack, files that match will result in warnings like this:

    WARNING in ./foobar/frontend/static/frontend/fonts/Roboto/Roboto-Regular.ttf
    [warning-loader] WARNING: /code/foobar/npm-dependencies/node_modules/file-loader/index.js!/code/console-warning-loader/index.js?{"WARNING":"Found asset in Django \"static\" folder. Please move to \"assets\" folder."}!/code/foobar/foobar/frontend/static/frontend/fonts/Roboto/Roboto-Regular.ttf


No support
----------

Sorry, I can't really support this. Use at your own risk. Good luck! :)
