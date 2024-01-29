import './custom-components/ExpandableList.js';
import './custom-components/BlogPost.js';
import './custom-components/BlogPostList.js';
import './custom-components/TodoItem.js';
import './custom-components/UserCard.js';
import './custom-components/ZButton.js';

const blogPostsElement = document.getElementById('blog-posts');

// API call to get the posts data and pass it to the custom element
blogPostsElement.posts = [
  {
    title: 'Web Components Rock!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
  {
    title:
      'Web components is easy, boils down to DOM manipulation skills',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
  {
    title:
      'Not sure extending existing HTML elements is that powerful',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
  {
    title: 'How to build a fullstack website start to finish',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
  {
    title:
      'Why should Shrey be strongly considered for the open position of UI Engineer',
    link: 'https://www.zuora.com/2023/07/27/making-a-global-impact-as-an-early-career-software-engineer/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
  {
    title:
      'I wonder what would be the impact for the newly created web components',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eum eveniet fugit repellendus vero!',
  },
];
