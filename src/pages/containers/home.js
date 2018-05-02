import React, {Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Releated from '../components/related'

class Home extends Component {
    render(){

        return (
            <HomeLayout>
                <Releated/>
                <Categories categories={this.props.data.categories}/>
            </HomeLayout>
        )
    }
}

export default Home;