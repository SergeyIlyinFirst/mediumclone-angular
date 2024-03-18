import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {ArticleInterface} from "../../../shared/types/article.interface";

export interface EditArticleStateInterface {
  isLoading: boolean
  isSubmitting: boolean,
  validationErrors: BackendErrorsInterface | null,
  article: ArticleInterface | null
}
