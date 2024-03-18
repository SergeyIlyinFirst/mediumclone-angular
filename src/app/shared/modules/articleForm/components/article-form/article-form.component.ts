import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from "../../../../types/articleInput.interface";
import {BackendErrorsInterface} from "../../../../types/backendErrors.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      title: this.initialValuesProps.article.title,
      description: this.initialValuesProps.article.description,
      body: this.initialValuesProps.article.body,
      tagList: this.initialValuesProps.article.tagList.join(' ')
    })
  }

  onSubmit() {
    const articleBody: ArticleInputInterface = {
      article: {
        ...this.form.value,
        tagList: this.form.value.tagList.split(' ')
      }
    }
    this.articleSubmitEvent.emit(articleBody)
  }
}
