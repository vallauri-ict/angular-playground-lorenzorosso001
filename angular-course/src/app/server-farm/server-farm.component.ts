import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-farm',
  templateUrl: './server-farm.component.html',
  styleUrls: ['./server-farm.component.css']
})
export class ServerFarmComponent implements OnInit {

  //servers = [{"serverID":32, "serverStatus":"offline"}, {"serverID":24, "serverStatus":"online"}];

  servers = [];
  serverName :string = "";
  serverCreated :boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push("");
    this.serverCreated=true;
  }

  onChangeServerName() {
    this.serverCreated = false;
  }

}
