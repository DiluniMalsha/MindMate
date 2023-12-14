import React, {useRef, useState} from "react"
import "./DownloadData.css"
import {useDownloadExcel} from "react-export-table-to-excel"
import CustomButton from "../button/CustomButton";
import {getDataSet} from "../../repository/dateSetRepository";

const DownloadData = ({fromDate, toDate}) => {
    const [tableDate, settableDate] = useState([])


    // const startDateTime = fromDate.replace("T", " ")+":00";
    // const endDateTime = toDate.replace("T", " ")+":00";
    // console.log(startDateTime, endDateTime)

    const postDateTime = {
        "startDateTime": fromDate,
        "endDateTime": toDate
    }
    console.log(postDateTime)

    function getTablesDataSet() {
            getDataSet(postDateTime).then((res) => {
                settableDate(res.data.body)
                console.log(res.data.body)
            })
    }

    const tableRef = useRef(null)

    const {onDownload} = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "web User",
        sheet: "web user",
    })
    return (
        <>
            <div className='button-set'>
                <CustomButton
                    variant="primary"
                    radius="20"
                    size="sm"
                    fontSize="14"
                    width="185"
                    onclick={getTablesDataSet}
                    className='mb-4'
                >
                    Generate
                </CustomButton>
                <span className="button-set">
                <CustomButton
                    variant="primary"
                    radius="20"
                    size="sm"
                    fontSize="14"
                    width="185"
                    onclick={onDownload}
                    className='mb-4'
                >
                    Download
                </CustomButton>
                    </span>
            </div>
            <div className="table-width">
                <div>
                    <table ref={tableRef} className="table table-bordered" id="table1">
                        <thead>
                        <tr>
                            <th className="table-header">Date & Time</th>
                            <th className="table-header">Emotion</th>
                            <th className="table-header">Response</th>
                            <th className="table-header">After Emotion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableDate.map((tableData, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="tables-box">{tableData.dateTime}</td>
                                        <td className="tables-box">{tableData.emotion}</td>
                                        <td className="tables-box">{tableData.response}</td>
                                        <td className="tables-box">{tableData.afterEmotion}</td>
                                    </tr>
                                )
                            }
                        )}
                        < /tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default DownloadData;