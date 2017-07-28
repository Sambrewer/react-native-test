import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CategoryDetail from './CategoryDetail';

const SQLite = require('react-native-sqlite-storage');


class CategoryList extends Component {

    state = {
      categories: []
    }

  componentWillMount() {
    const db = SQLite.openDatabase({
      name: 'main',
      createFromLocation: '~test.db',
      location: 'Library' },
      this.openCB,
      this.errorCB
    );

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM category', [], (tx, results) => {
        const len = results.rows.length;
        const categories = [];
        for (let i = 0; i < len; i++) {
          const row = results.rows.item(i);
          categories.push(row);
          this.setState({ categories });
        }
      });
    });
  }

  renderCategories() {
    return this.state.categories.map((category) => (
        <CategoryDetail key={category.id} category={category} />
      )
    );
  }

  render() {
    return (
      <ScrollView>
          {this.renderCategories()}
      </ScrollView>
    );
  }
}

export default CategoryList;
