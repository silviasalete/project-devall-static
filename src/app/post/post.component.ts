import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: Post[];
  public load: boolean = true;
  public form = this.formBuilder.group({
    search: this.formBuilder.control(null, Validators.required)
  });

  
  constructor(private service: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listPost().subscribe(resposta => {
      resposta.map(post =>{

        this.service.detalhesPost(post.id).subscribe(detalhes => {
          post.url = detalhes.url;
        });

      });

      if (resposta) {
        this.load = false;
        this.posts = resposta;              
      }
    })
  }

  buscar(){
    let search = this.form.get("search").value;

    this.service.buscar(search).subscribe(resposta => {
      if (resposta) {
        resposta.map(post =>{
  
          this.service.detalhesPost(post.id).subscribe(detalhes => {
            post.url = detalhes.url;
          });
  
        });
        this.load = false;
        this.posts = resposta;   
        console.log(this.posts);
           
      }
    })
  }

}
