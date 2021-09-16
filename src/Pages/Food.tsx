import {food} from "../Assets/food";
import NestedMenu from "../Components/NestedMenu";
import PageBox from "../Components/PageBox";
import PageContent from "../Components/PageContent";
import PageTitle from "../Components/PageTitle";
import PageButton from "../Components/PageButton";
export default function Food(){
    return (<PageBox>
        <PageTitle title="Nested menu for food" />
        <PageContent>
        <NestedMenu menuNodes={food} level={0}/>
        <PageButton
          buttonName="Cancel"
          buttonFunction={() => {
            window.location.href = "/moremenu";
          }}
        />
        </PageContent>
    </PageBox>);
}