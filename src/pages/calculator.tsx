import Header from "@/components/Header";
import MetaHead from "@/components/MetaHead";

function calculator() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-300">
            <MetaHead title="Calculator" />
            <main className="main">
                <Header text="Calculator"/>
                <div className="relative justify-center mx-52 px-10 flex flex-shrink-0">
                    <div className="grid 0.2fr grid-cols-4 gap-8 text-center w-[350px] h-[350px] mx-auto">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>+</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>-</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>*</div>
                        <div>0</div>
                        <div>.</div>
                        <div>/</div>
                        <div>=</div>

                    </div>
                </div>
            <p className="text-center pt-8">There is no functionally yet</p>

            </main>
    </div>
  );
}

export default calculator;