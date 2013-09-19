#!/usr/local/bin/node
// http://nodejs.org/api.html#_child_processes

var sys =require('sys')
var exec =require('child_process').exec;

function puts(error, stdout, stderr) 
	{
	  sys.puts(stdout)
	}

exec("ls -la", puts);


