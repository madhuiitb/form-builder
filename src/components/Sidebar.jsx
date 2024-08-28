import PropTypes from 'prop-types';
function Sidebar({ addField }) {
  return (
    <div className="flex flex-col justify-start gap-12 bg-gray-100 w-2/6 h-screen p-8">
      <div className="flex flex-col gap-4  ">
        <h3 className="font-extrabold">Add Fields</h3>
        <button onClick={() => addField("textarea")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/textarea_icon.png" alt="plus" />
              <span>Textarea</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>
        <button onClick={() => addField("number")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/numerical_icon.png" alt="plus" />
              <span>Numeric rating</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>

        <button onClick={() => addField("star")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/star_icon.png" alt="plus" />
              <span>Star rating</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>
        <button onClick={() => addField("emoticon")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/smiley_icon.png" alt="plus" />
              <span>Smiley rating</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>
        <button onClick={() => addField("text")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/input_icon.png" alt="plus" />
              <span>Single line input</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>

        <button onClick={() => addField("radio")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/radio_icon.png" alt="plus" />
              <span>Radio button</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>

        <button onClick={() => addField("categories")}>
          <div className="flex items-center justify-between ">
            <div className="flex justify-between gap-2">
              <img src="/cate_icon.png" alt="plus" />
              <span>Categories</span>
            </div>
            <img
              className="bg-gray-200"
              src="/plus-large.png"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      <div>Add Logic</div>
    </div>
  );
}

Sidebar.propTypes = {
  addField: PropTypes.func,
}

export default Sidebar;
