import React from 'react'

interface Props {
    pageName?: string
}

export const Breadcrumb: React.SFC<Props> = (props) => {
    const { pageName } = props

    return (
        <section className="breadcrumb breadcrumb_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb_iner text-center">
                            <div className="breadcrumb_iner_item">
                                <h2>contact us</h2>
                                <h5>home <span></span> {pageName}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}