import PropTypes from 'prop-types'


const MasonryLayout = (props) => {
    const columnWrapper = {};
    const result = [];

    for (let i = 0; i < props.columns; i++) {
        columnWrapper[`column${i}`] = [];
    }
    console.log(columnWrapper)
    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % props.columns;
        columnWrapper[`column${columnIndex}`].push(
          <div style={{ marginBottom: `${props.gap}px` }}>
            {props.children[i]}
          </div>
        );
    }
    // console.log(columnWrapper)
    for (let i = 0; i < props.columns; i++) {
        result.push(
          <div
            style={{
              marginLeft: `${i > 0 ? props.gap : 0}px`,
              flex: 1,
            }}>
            {columnWrapper[`column${i}`]}
          </div>
        );
    }
    // console.log(result)

    return (
        <div style={{ display: 'flex', border: '1px' }}>
            {result}
        </div>
    )
}

MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };

MasonryLayout.defaultProps = {
    columns: 2,
    gap: 20,
};

export default MasonryLayout
