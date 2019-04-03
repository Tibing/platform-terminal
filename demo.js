#!/usr/bin/env node

var blessed = require('blessed')
  , contrib = require('blessed-contrib');

var screen = blessed.screen();

//create layout and widgets

var grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

var sparkline = grid.set(6, 9, 6, 3, contrib.sparkline,
  {
    label: 'Throughput (bits/sec)'
    , tags: true
    , style: { fg: 'blue', titleFg: 'white' }
  });

var bar = grid.set(0, 3, 3, 3, contrib.bar,
  {
    label: 'Server Utilization (%)'
    , barWidth: 4
    , barSpacing: 6
    , xOffset: 2
    , maxHeight: 9
  });

var table = grid.set(3, 0, 3, 6, contrib.table,
  {
    keys: true
    , fg: 'green'
    , label: 'Active Processes'
    , columnSpacing: 1
    , columnWidth: [ 28, 20, 20 ]
  });

var transactionsLine = grid.set(0, 0, 3, 3, contrib.line,
  {
    showNthLabel: 5
    , maxY: 100
    , label: 'Total Transactions'
    , showLegend: true
    , legend: { width: 10 }
  });

var transactionsLine1 = grid.set(0, 6, 6, 6, contrib.line,
  {
    showNthLabel: 5
    , maxY: 100
    , label: 'Total Transactions'
    , showLegend: true
    , legend: { width: 10 }
  });

var map = grid.set(6, 0, 6, 9, contrib.map, { label: 'Servers Location' });

//dummy data
var servers = [ 'US1', 'US2', 'EU1', 'AU1' ];
var commands = [ 'grep', 'node', 'java', 'timer', '~/ls -l', 'netns', 'watchdog', 'gulp', 'tar -xvf', 'awk', 'npm install' ];



// set dummy data on bar chart
function fillBar() {
  var arr = [];
  for (var i = 0; i < servers.length; i++) {
    arr.push(Math.round(Math.random() * 10))
  }
  bar.setData({ titles: servers, data: arr })
}

fillBar();
setInterval(fillBar, 2000);


//set dummy data for table
function generateTable() {
  var data = [];

  for (var i = 0; i < 30; i++) {
    var row = [];
    row.push(commands[ Math.round(Math.random() * (commands.length - 1)) ]);
    row.push(Math.round(Math.random() * 5));
    row.push(Math.round(Math.random() * 100));

    data.push(row)
  }

  table.setData({ headers: [ 'Process', 'Cpu (%)', 'Memory' ], data: data })
}

generateTable();
table.focus();
setInterval(generateTable, 3000);

var spark1 = [ 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark2 = [ 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark3 = [ 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark4 = [ 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark5 = [ 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark6 = [ 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];
var spark7 = [ 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 4, 4, 5, 4, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5 ];

refreshSpark();
setInterval(refreshSpark, 1000);

function refreshSpark() {
  spark1.shift();
  spark1.push(Math.random() * 5 + 1);
  spark2.shift();
  spark2.push(Math.random() * 5 + 1);
  spark3.shift();
  spark3.push(Math.random() * 5 + 1);
  spark4.shift();
  spark4.push(Math.random() * 5 + 1);
  spark5.shift();
  spark5.push(Math.random() * 5 + 1);
  spark6.shift();
  spark6.push(Math.random() * 5 + 1);
  spark7.shift();
  spark7.push(Math.random() * 5 + 1);
  sparkline.setData(
    [ 'Server1', 'Server2', 'Server3', 'Server4', 'Server5', 'Server6', 'Server7' ],
    [ spark1, spark2, spark3, spark4, spark5, spark6, spark7 ],
  )
}


//set map dummy markers
var marker = true;
setInterval(function () {
  if (marker) {
    map.addMarker({ 'lon': '-79.0000', 'lat': '37.5000', color: 'yellow', char: 'X' });
    map.addMarker({ 'lon': '-122.6819', 'lat': '45.5200' });
    map.addMarker({ 'lon': '-6.2597', 'lat': '53.3478' });
    map.addMarker({ 'lon': '103.8000', 'lat': '1.3000' })
  } else {
    map.clearMarkers()
  }
  marker = !marker;
  screen.render()
}, 1000);

//set line charts dummy data

var transactionsData = {
  title: 'USA',
  style: { line: 'red' },
  x: [ '00:00', '00:05', '00:10', '00:15', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50', '04:00', '04:10', '04:20', '04:30' ],
  y: [ 0, 20, 40, 45, 45, 50, 55, 70, 65, 58, 50, 55, 60, 65, 70, 80, 70, 50, 40, 50, 60, 70, 82, 88, 89, 89, 89, 80, 72, 70 ]
};

var transactionsData1 = {
  title: 'Europe',
  style: { line: 'yellow' },
  x: [ '00:00', '00:05', '00:10', '00:15', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00', '02:10', '02:20', '02:30', '02:40', '02:50', '03:00', '03:10', '03:20', '03:30', '03:40', '03:50', '04:00', '04:10', '04:20', '04:30' ],
  y: [ 0, 5, 5, 10, 10, 15, 20, 30, 25, 30, 30, 20, 20, 30, 30, 20, 15, 15, 19, 25, 30, 25, 25, 20, 25, 30, 35, 35, 30, 30 ]
};

var errorsData = {
  title: 'server 1',
  x: [ '00:00', '00:05', '00:10', '00:15', '00:20', '00:25' ],
  y: [ 30, 50, 70, 40, 50, 20 ]
};

var latencyData = {
  x: [ 't1', 't2', 't3', 't4' ],
  y: [ 5, 1, 7, 5 ]
};

setLineData([ transactionsData, transactionsData1 ], transactionsLine);
setLineData([ transactionsData, transactionsData1 ], transactionsLine1);

setInterval(function () {
  setLineData([ transactionsData, transactionsData1 ], transactionsLine);
  setLineData([ transactionsData, transactionsData1 ], transactionsLine1);
  screen.render()
}, 500);

function setLineData(mockData, line) {
  for (var i = 0; i < mockData.length; i++) {
    var last = mockData[ i ].y[ mockData[ i ].y.length - 1 ];
    mockData[ i ].y.shift();
    var num = Math.max(last + Math.round(Math.random() * 10) - 5, 10);
    mockData[ i ].y.push(num)
  }

  line.setData(mockData)
}


screen.key([ 'escape', 'q', 'C-c' ], function (ch, key) {
  return process.exit(0);
});

screen.on('resize', function () {
  sparkline.emit('attach');
  bar.emit('attach');
  table.emit('attach');
  transactionsLine.emit('attach');
  map.emit('attach');
});

screen.render();
