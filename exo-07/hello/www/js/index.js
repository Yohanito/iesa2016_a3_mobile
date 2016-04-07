/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.getElementById('timestamp').innerHTML = new Date();
        app.deviceinfo();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    deviceinfo: function(){
        var element = document.getElementById('deviceProperties');
        element.innerHTML = '<ul data-role=listview" id="list">'
            + '<li data-icon="arrow-l">Name: ' + device.name + '</li>'
            + '<li data-icon="arrow-r">Model: ' + device.model + '</li>'
            + '<li data-icon="arrow-r">Cordova: ' + device.cordova + '</li>'
            + '<li data-icon="arrow-l">Platform: ' + device.platform + '</li>'
            + '<li data-icon="arrow-r">UUID: ' + device.uuid + '</li>'
            + '<li data-icon="arrow-l">Version: ' + device.version + '</li>'
            + '</ul>'
        ;  
    },
    checkConnection: function(){
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'UNKNOWN connection';
        states[Connection.ETHERNET] = 'ETHERNET connection';
        states[Connection.WIFI] = 'WIFI connection';
        states[Connection.CELL_2G] = 'CELL_2G connection';
        states[Connection.CELL_3G] = 'CELL_3G connection';
        states[Connection.CELL_4G] = 'CELL_4G connection';
        states[Connection.CELL] = 'CELL Generic connection';
        states[Connection.NONE] = 'No network connection';
        alert('Connection type: ' + states(networkState));
    },
    document.addEventListener("online", this.checkConnection);
    document.addEventListener("offline", this.checkConnection);
};

app.initialize();