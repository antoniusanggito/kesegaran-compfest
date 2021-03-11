import PropTypes from 'prop-types'


const MasonryLayout = (props) => {
    const columnWrapper = {};
    const result = [];

    for (let i = 0; i < 3; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % 3;
        columnWrapper[`column${columnIndex}`].push(
          <div style={{ marginBottom: `20px` }}>
            {props.children[i]}
          </div>
        );
    }

    for (let i = 0; i < 3; i++) {
        result.push(
          <div
            style={{
              marginLeft: `${i > 0 ? 20 : 0}px`,
              flex: 1,
            }}>
            {columnWrapper[`column${i}`]}
          </div>
        );
    }

    return (
        <div style={{ display: 'flex' }}>
            {result}
        </div>
    )
}

MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };

export default MasonryLayout
