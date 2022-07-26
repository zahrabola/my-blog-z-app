//import image from "../../Constant/image";
import { Link } from "react-router-dom";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="postinfo">
        <span className="postcat">Archirecture Blog</span>
        <hr />
        <span className="posttitle">
          <Link id="RouterNavLink" className="link2" to="/single">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdescription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
