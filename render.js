import { functions } from "lodash";
import { token, user } from "./api.js";
import { answerComment, initEventAndCommentListener, initEventListeners } from "./listeners.js";
import { renderLogin } from "./login.js";

export const renderComments = ({comments}) => {
   const container = document.querySelector (".comments")
    const commentsHtml = comments
    .map((comment, index) => {
      return ` <li class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.time}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.comment}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comments[index].likes}</span>
              <button data-index= "${index}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
            </div>
          </div>
        </li> `
    }).join("");

    
    // listCommentsElement.innerHTML = commentsHtml; 

    container.innerHTML = commentsHtml;
    
    
    initEventListeners({comments});   
    answerComment();
    };

    export function renderForm () {
      const container = document.querySelector(".form");
      const formHtml = `<div class="add-form">
    <input
      type="text"
      class="add-form-name"
      placeholder="Введите ваше имя"
      value="${user}"
      disabled
    />
    <textarea
      type="textarea"
      class="add-form-text"
      placeholder="Введите ваш коментарий"
      rows="4"
    ></textarea>
    <div class="add-form-row">
      <button class="add-form-button">Написать</button>
    </div>
  </div>`
      container.innerHTML = token ? formHtml : '<p class="login-btn">Чтобы добавить комментарий, авторизуйтесь</p>'

      function actionLogin() {
        if (token) {
         initEventAndCommentListener();
          return
        }
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.addEventListener('click', () => {
        renderLogin();
        })
      }
  
      actionLogin();
    }