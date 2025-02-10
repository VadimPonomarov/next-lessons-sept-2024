import SkeletonCo from "@/components/Skeleton/Skeleton.tsx";

const Loading = async () => {
    return (
        <div className={"w-full h-full flex justify-center content-center"}>
            <SkeletonCo/>
        </div>
    );
};

export default Loading;
