import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  posts: Post[] = [];
  constructor(public postService: PostService,private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    })
    this.postService.getAll().subscribe((data:Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('user/index');
    })
  }

}
