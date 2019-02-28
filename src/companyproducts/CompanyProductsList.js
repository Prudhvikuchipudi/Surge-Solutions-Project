//import React, { Component } from 'react';
//import CompanyProductData from '../data/testcompanyproducts.json';
//import AWS from 'aws-sdk';

//Get list of objects, then find the correct object, then get the object, only then will we get the contents
//Create a map /hash for trans union = /s3/surge-app/productguidelines\
//MAke sure bucket and objects in buclet are public
//best practice to take create groups, and assign policies to groups, then add user to groups
//resources - s3/ec2/lambda functions/could functions - create role, assign policy to role that will grant role to access needed
//via sdk or cli through react app.
//play around with permission - try retrieve reseoucres through different methods
//cli oporate as a user
//sdk oporate as application

/*var s3 = new AWS.S3();
var params = {
    Bucket: "surge-app",
    MaxKeys: 2
};

s3.listObjects(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});*/

//s3.getObject()

/*class CompanyProductList extends Component {
    render() {
        return (
            <div >
                {CompanyProductData.map((companyDetail, index)=>{
                    return <div>
                    <p>{companyDetail.id}</p>
                    <p>{companyDetail.employmentStatus}</p>
                    <p>{companyDetail.goalOfLoan}</p>
                    <p>{companyDetail.loanAmount}</p>
                    <p>{companyDetail.income}</p>
                    </div>
                })}
            </div>
        )
    }
}*/

const aws = require('aws-sdk');

(async function() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: 'AKIAJEQJRIWYYKZCO44Q',
            secretAccessKey: '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',
            region: 'us-east-1'
        });

        const s3 = new aws.S3();
        //var allKeys=[];
        const response = await s3.listObjectsV2({
            Bucket: 'surge-app',
            Prefix: 'Product Guidelines'
        }).promise();
        //var contents = response[1].Contents;

        //console.log(response);
        var mydata = "";
        const data = await s3.getObject({
            Bucket: 'surge-app',
            Key: 'Product Guidelines/testcompanyproducts.json'
        }, function(err,data){
            if(err){
                console.log(err)
            }
            else{
                console.log(data.Body.toString());
                mydata = data.Body.toString();
            }
        }).promise();
        parsedata = JSON.parse(mydata);
        for (var i=0; i<parsedata.length; i++){
            var cur = parsedata[i];
            var curd = cur["id"];
            console.log(curd);
        }
        //console.log(data);
        //var testdata = data;

    } catch(e) {
        console.log('our error', e);
    }

    debugger;

})();
/*
class CompanyProductListv2 extends Component {
    render() {
        return (
            <div >
                <p>{console.log()}</p>
            </div>
        )
    }
}*/

//export default CompanyProductList
//export default CompanyProductListv2