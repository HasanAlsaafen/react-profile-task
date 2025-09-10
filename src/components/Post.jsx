import { BiRepost } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { BsUpload } from "react-icons/bs";

export default function Post({ post }) {
  return (
    <div className="post">
      <p className="more">...</p>

      <span className="post-repost">
        {" "}
        <BiRepost />
        React reposted
      </span>
      <div className="post-user">
        <img src={post.img} alt="" className="post-img" />
        <div className="post-user-info">
          <div className="post-user-info-upper">
            <div className="test">
              {" "}
              <h4>{post.name}</h4>
              <p className="post-user-username">{post.account}</p>
            </div>
          </div>
          <div>
            <p className="post-content">{post.content}</p>
          </div>
        </div>
      </div>
      <div className="post-actions">
        <button className="post-action-btn">
          <LuMessageCircle />
          &nbsp;
          <span>{post.reactions.comments}</span>
        </button>
        <button className="post-action-btn">
          {" "}
          <BiRepost />
          &nbsp;
          <span>{post.reactions.reposts}</span>
        </button>{" "}
        <button className="post-action-btn">
          <CiHeart />
          &nbsp;
          <span>{post.reactions.likes}</span>
        </button>
        <button className="post-action-btn">
          <SiSimpleanalytics />
          &nbsp;
          <span>{post.reactions.analitics}</span>
        </button>
        <button className="post-action-btn">
          <BsUpload />
        </button>
      </div>
    </div>
  );
}
