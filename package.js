Package.describe({
  name: 'chipcastledotcom:jspdf',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for wrapping jsPDF',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChipCastleDotCom/meteor-jspdf.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('jsPDF/dist/jspdf.debug.js', 'client');
});
