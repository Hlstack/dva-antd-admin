import React from 'react';
import { connect } from 'dva';
// import styles from './List.css';

function List() {
  return (
    <div>
      Route Component: List
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List);
