import React, { memo } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

import 'prismjs/components/prism-json';
import './prism-okaida.scss';

class Content extends React.Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        if (this.props.text) {
            return (
                <pre className="language-javascript" id="json">
                    <code className="language-javascript">
                        { JSON.stringify(this.props.text, null, 2) }
                    </code>
                </pre>
            )
            
        }
        return (
          <></>
        )
    }
}

Content.propTypes = {
    text: PropTypes.any,
};


export default memo(Content);