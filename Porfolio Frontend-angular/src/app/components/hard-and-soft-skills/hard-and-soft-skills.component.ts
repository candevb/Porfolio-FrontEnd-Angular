import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit{
 skillsList: Skills[]=[];

  constructor(private sSkills:SkillsService){}

  ngOnInit(): void{

    this.verSkills();

  } 

  verSkills():void{
    this.sSkills.ver().subscribe(data => {this.skillsList = data;})
    
    
  }


}
