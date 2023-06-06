import { Transform } from './Util.js';
import { SceneCanvas, Canvas } from './Canvas.js';
import { Container } from './Container.js';
import { GetSet, Vector2d, IRect } from './types.js';
import { Stage } from './Stage.js';
import { Context } from './Context.js';
import { Shape } from './Shape.js';
import { Layer } from './Layer.js';
export type Filter = (this: Node, imageData: ImageData) => void;
type globalCompositeOperationType = '' | 'source-over' | 'source-in' | 'source-out' | 'source-atop' | 'destination-over' | 'destination-in' | 'destination-out' | 'destination-atop' | 'lighter' | 'copy' | 'xor' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export interface NodeConfig {
    [index: string]: any;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    visible?: boolean;
    listening?: boolean;
    id?: string;
    name?: string;
    opacity?: number;
    scale?: Vector2d;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    rotationDeg?: number;
    offset?: Vector2d;
    offsetX?: number;
    offsetY?: number;
    draggable?: boolean;
    dragDistance?: number;
    dragBoundFunc?: (this: Node, pos: Vector2d) => Vector2d;
    preventDefault?: boolean;
    globalCompositeOperation?: globalCompositeOperationType;
    filters?: Array<Filter>;
}
type NodeEventMap = GlobalEventHandlersEventMap & {
    [index: string]: any;
};
export interface KonvaEventObject<EventType> {
    type: string;
    target: Shape | Stage;
    evt: EventType;
    pointerId: number;
    currentTarget: Node;
    cancelBubble: boolean;
    child?: Node;
}
export type KonvaEventListener<This, EventType> = (this: This, ev: KonvaEventObject<EventType>) => void;
export declare abstract class Node<Config extends NodeConfig = NodeConfig> {
    _id: number;
    eventListeners: {
        [index: string]: Array<{
            name: string;
            handler: Function;
        }>;
    };
    attrs: any;
    index: number;
    _allEventListeners: null | Array<Function>;
    parent: Container<Node> | null;
    _cache: Map<string, any>;
    _attachedDepsListeners: Map<string, boolean>;
    _lastPos: Vector2d;
    _attrsAffectingSize: string[];
    _batchingTransformChange: boolean;
    _needClearTransformCache: boolean;
    _filterUpToDate: boolean;
    _isUnderCache: boolean;
    nodeType: string;
    className: string;
    _dragEventId: number | null;
    _shouldFireChangeEvents: boolean;
    constructor(config?: Config);
    hasChildren(): boolean;
    _clearCache(attr?: string): void;
    _getCache(attr: string, privateGetter: Function): any;
    _calculate(name: string, deps: Array<string>, getter: Function): any;
    _getCanvasCache(): any;
    _clearSelfAndDescendantCache(attr?: string): void;
    clearCache(): this;
    cache(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        drawBorder?: boolean;
        offset?: number;
        pixelRatio?: number;
        imageSmoothingEnabled?: boolean;
        hitCanvasPixelRatio?: number;
    }): this;
    isCached(): boolean;
    abstract drawScene(canvas?: Canvas, top?: Node): void;
    abstract drawHit(canvas?: Canvas, top?: Node): void;
    getClientRect(config?: {
        skipTransform?: boolean;
        skipShadow?: boolean;
        skipStroke?: boolean;
        relativeTo?: Container<Node>;
    }): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _transformedRect(rect: IRect, top: Node): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _drawCachedSceneCanvas(context: Context): void;
    _drawCachedHitCanvas(context: Context): void;
    _getCachedSceneCanvas(): any;
    on<K extends keyof NodeEventMap>(evtStr: K, handler: KonvaEventListener<this, NodeEventMap[K]>): any;
    off(evtStr?: string, callback?: Function): this;
    dispatchEvent(evt: any): this;
    addEventListener(type: string, handler: (e: Event) => void): this;
    removeEventListener(type: string): this;
    _delegate(event: string, selector: string, handler: (e: Event) => void): void;
    remove(): this;
    _clearCaches(): void;
    _remove(): void;
    destroy(): this;
    getAttr(attr: string): any;
    getAncestors(): Node<NodeConfig>[];
    getAttrs(): any;
    setAttrs(config: any): this;
    isListening(): any;
    _isListening(relativeTo?: Node): boolean;
    isVisible(): any;
    _isVisible(relativeTo?: Node): boolean;
    shouldDrawHit(top?: Node, skipDragCheck?: boolean): boolean;
    show(): this;
    hide(): this;
    getZIndex(): number;
    getAbsoluteZIndex(): number;
    getDepth(): number;
    _batchTransformChanges(func: any): void;
    setPosition(pos: Vector2d): this;
    getPosition(): {
        x: number;
        y: number;
    };
    getRelativePointerPosition(): {
        x: number;
        y: number;
    };
    getAbsolutePosition(top?: Node): {
        x: number;
        y: number;
    };
    setAbsolutePosition(pos: Vector2d): this;
    _setTransform(trans: any): void;
    _clearTransform(): {
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        offsetX: number;
        offsetY: number;
        skewX: number;
        skewY: number;
    };
    move(change: Vector2d): this;
    _eachAncestorReverse(func: any, top: any): void;
    rotate(theta: number): this;
    moveToTop(): boolean;
    moveUp(): boolean;
    moveDown(): boolean;
    moveToBottom(): boolean;
    setZIndex(zIndex: any): this;
    getAbsoluteOpacity(): any;
    _getAbsoluteOpacity(): number;
    moveTo(newContainer: any): this;
    toObject(): any;
    toJSON(): string;
    getParent(): Container<Node<NodeConfig>>;
    findAncestors(selector: string, includeSelf?: boolean, stopNode?: Node): Node<NodeConfig>[];
    isAncestorOf(node: Node): boolean;
    findAncestor(selector?: string, includeSelf?: boolean, stopNode?: Container): any;
    _isMatch(selector: string | Function): any;
    getLayer(): Layer | null;
    getStage(): Stage | null;
    _getStage(): Stage | undefined;
    fire(eventType: string, evt?: any, bubble?: boolean): this;
    getAbsoluteTransform(top?: Node): Transform;
    _getAbsoluteTransform(top?: Node): Transform;
    getAbsoluteScale(top?: Node): {
        x: number;
        y: number;
    };
    getAbsoluteRotation(): number;
    getTransform(): Transform;
    _getTransform(): Transform;
    clone(obj?: any): any;
    _toKonvaCanvas(config: any): SceneCanvas;
    toCanvas(config?: any): HTMLCanvasElement;
    toDataURL(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        pixelRatio?: number;
        mimeType?: string;
        quality?: number;
        callback?: (str: string) => void;
    }): string;
    toImage(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        pixelRatio?: number;
        mimeType?: string;
        quality?: number;
        callback?: (img: HTMLImageElement) => void;
    }): Promise<unknown>;
    toBlob(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        pixelRatio?: number;
        mimeType?: string;
        quality?: number;
        callback?: (blob: Blob) => void;
    }): Promise<unknown>;
    setSize(size: any): this;
    getSize(): {
        width: number;
        height: number;
    };
    getClassName(): string;
    getType(): string;
    getDragDistance(): number;
    _off(type: any, name?: any, callback?: any): void;
    _fireChangeEvent(attr: any, oldVal: any, newVal: any): void;
    addName(name: any): this;
    hasName(name: any): boolean;
    removeName(name: any): this;
    setAttr(attr: any, val: any): this;
    _requestDraw(): void;
    _setAttr(key: any, val: any): void;
    _setComponentAttr(key: any, component: any, val: any): void;
    _fireAndBubble(eventType: any, evt: any, compareShape?: any): void;
    _getProtoListeners(eventType: any): any;
    _fire(eventType: any, evt: any): void;
    draw(): this;
    _createDragElement(evt: any): void;
    startDrag(evt?: any, bubbleEvent?: boolean): void;
    _setDragPosition(evt: any, elem: any): void;
    stopDrag(evt?: any): void;
    setDraggable(draggable: any): void;
    isDragging(): boolean;
    _listenDrag(): void;
    _dragChange(): void;
    _dragCleanup(): void;
    isClientRectOnScreen(margin?: {
        x: number;
        y: number;
    }): boolean;
    preventDefault: GetSet<boolean, this>;
    blue: GetSet<number, this>;
    brightness: GetSet<number, this>;
    contrast: GetSet<number, this>;
    blurRadius: GetSet<number, this>;
    luminance: GetSet<number, this>;
    green: GetSet<number, this>;
    alpha: GetSet<number, this>;
    hue: GetSet<number, this>;
    kaleidoscopeAngle: GetSet<number, this>;
    kaleidoscopePower: GetSet<number, this>;
    levels: GetSet<number, this>;
    noise: GetSet<number, this>;
    pixelSize: GetSet<number, this>;
    red: GetSet<number, this>;
    saturation: GetSet<number, this>;
    threshold: GetSet<number, this>;
    value: GetSet<number, this>;
    dragBoundFunc: GetSet<(this: Node, pos: Vector2d) => Vector2d, this>;
    draggable: GetSet<boolean, this>;
    dragDistance: GetSet<number, this>;
    embossBlend: GetSet<boolean, this>;
    embossDirection: GetSet<string, this>;
    embossStrength: GetSet<number, this>;
    embossWhiteLevel: GetSet<number, this>;
    enhance: GetSet<number, this>;
    filters: GetSet<Filter[], this>;
    position: GetSet<Vector2d, this>;
    absolutePosition: GetSet<Vector2d, this>;
    size: GetSet<{
        width: number;
        height: number;
    }, this>;
    id: GetSet<string, this>;
    listening: GetSet<boolean, this>;
    name: GetSet<string, this>;
    offset: GetSet<Vector2d, this>;
    offsetX: GetSet<number, this>;
    offsetY: GetSet<number, this>;
    opacity: GetSet<number, this>;
    rotation: GetSet<number, this>;
    zIndex: GetSet<number, this>;
    scale: GetSet<Vector2d | undefined, this>;
    scaleX: GetSet<number, this>;
    scaleY: GetSet<number, this>;
    skew: GetSet<Vector2d, this>;
    skewX: GetSet<number, this>;
    skewY: GetSet<number, this>;
    to: (params: AnimTo) => void;
    transformsEnabled: GetSet<string, this>;
    visible: GetSet<boolean, this>;
    width: GetSet<number, this>;
    height: GetSet<number, this>;
    x: GetSet<number, this>;
    y: GetSet<number, this>;
    globalCompositeOperation: GetSet<globalCompositeOperationType, this>;
    static create(data: any, container?: any): any;
    static _createNode(obj: any, container?: any): any;
}
interface AnimTo extends NodeConfig {
    onFinish?: Function;
    onUpdate?: Function;
    duration?: number;
}
export {};
