export default function AuthorBox({ author = 'Editorial Team' }: { author?: string }) {
    return (
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                        {author.charAt(0)}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{author}</h3>
                    <p className="text-sm text-slate-600 mb-2">Product Research & Editorial</p>
                    <p className="text-sm text-slate-700">
                        Our editorial team conducts in-depth research, compares prices across platforms,
                        and provides honest, unbiased product recommendations to help you make informed
                        purchasing decisions.
                    </p>
                </div>
            </div>
        </div>
    );
}
